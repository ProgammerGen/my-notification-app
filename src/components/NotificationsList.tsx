import React, { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, onSnapshot, query, orderBy, updateDoc, doc } from 'firebase/firestore';
import * as Dialog from '@radix-ui/react-dialog';

interface Notification {
  id: string;
  type: string;
  read: boolean;
}

const NotificationsList: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    const q = query(collection(db, 'notifications'), orderBy('timestamp', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const notifs = snapshot.docs.map(doc => ({
        ...doc.data() as Notification,
        id: doc.id,
      }));
      setNotifications(notifs);
    });
    return () => unsubscribe();
  }, []);

  const markAsRead = async (id: string) => {
    const notificationRef = doc(db, 'notifications', id);
    await updateDoc(notificationRef, { read: true });
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger className="btn">Open Notifications</Dialog.Trigger>
      <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />
      <Dialog.Content className="fixed p-4 bg-white rounded-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h2 className='font-bold'>Notifications</h2>
        {notifications.map((notification) => (
          <div key={notification.id} className={`p-2 mt-2 ${notification.read ? 'bg-gray-100' : 'bg-green-100'} rounded-lg animate__fadeIn`}>
            <p>Notification {notification.type}</p>
            <button className={`text-sm py-1 px-2 rounded transition-colors duration-300 ease-in-out ${notification.read ? 'disabled' : 'hover:bg-blue-500 hover:text-white'}`} onClick={() => markAsRead(notification.id)}>{notification.read ? 'read' : 'Mark as Read'}</button>
          </div>
        ))}
       <Dialog.Close className="mt-4 btn bg-red-100 px-3 py-1">Close</Dialog.Close>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default NotificationsList;
