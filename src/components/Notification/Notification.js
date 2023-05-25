import React, { useEffect } from 'react';

import './Notification.css';

const Notification = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);

  return (
    <div className="notification">
      <span>{message}</span>
    </div>
  );
};

export default Notification;
