import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

const Notification = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  // Fetch bookings for this user
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/bookings?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setBookings(data));
    }
  }, [user]);

  // Update booking status (accept/reject)
  const updateBooking = async (id, status) => {
    await fetch(`http://localhost:5000/bookings/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });

    alert(`Request ${status}`);

    // Refresh bookings
    const updated = await fetch(
      `http://localhost:5000/bookings?email=${user.email}`
    );
    const data = await updated.json();
    setBookings(data);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Booking Notifications</h2>
      {bookings.length === 0 && <p>No bookings yet.</p>}
      {bookings.map((b) => (
        <div key={b._id} className="card mb-3 p-3 shadow-sm">

          {/* Booking Info */}
          <p><strong>Booking ID:</strong> {b._id}</p>
          <p><strong>Created:</strong> {new Date(b.createdAt).toLocaleString()}</p>

          {/* Property Title */}
          <h5>{b.propertyTitle}</h5>

          {/* Status */}
          <p><strong>Status:</strong> {b.status}</p>

          {/* Renter Info */}
          <p><strong>Renter:</strong> {b.renterName} ({b.renterEmail})</p>
          <a
            href={`mailto:${b.renterEmail}`}
            className="btn btn-outline-primary btn-sm mt-2"
          >
            Email Renter
          </a>

          {/* Owner Info */}
          <p className="mt-2"><strong>Owner:</strong> {b.ownerEmail}</p>

          {/* Owner Controls */}
          {user.email === b.ownerEmail && b.status === "pending" && (
            <div className="mt-3">
              <button
                onClick={() => updateBooking(b._id, "accepted")}
                className="btn btn-success me-2"
              >
                Accept
              </button>
              <button
                onClick={() => updateBooking(b._id, "rejected")}
                className="btn btn-danger"
              >
                Reject
              </button>
            </div>
          )}

          {/* Renter View */}
          {user.email === b.renterEmail && b.status !== "pending" && (
            <p className="text-info mt-3">
              Your request has been <strong>{b.status}</strong>
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Notification;
