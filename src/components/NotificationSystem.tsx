import React from 'react';
import { db } from '../firebaseConfig';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const NotificationSystem: React.FC = () => {
  const sendNotification = async (type: string) => {
    await addDoc(collection(db, 'notifications'), {
      type,
      read: false,
      timestamp: serverTimestamp(),
    });
  };

  return (
    <div className="p-5">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded animate-bounceIn" onClick={() => sendNotification('Type 1')}>Notify Type 1</button>
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded animate-bounceIn" onClick={() => sendNotification('Type 2')}>Notify Type 2</button>
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded animate-bounceIn" onClick={() => sendNotification('Type 3')}>Notify Type 3</button>
    </div>
  );
};

export default NotificationSystem;
