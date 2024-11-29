"use client"
import { useState } from "react";

export default function Tabs({ description, reviews }) {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div>
      <div className="flex space-x-4 border-b">
        <button
          className={`pb-2 ${activeTab === "description" ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-600"}`}
          onClick={() => setActiveTab("description")}
        >
          Description
        </button>
        <button
          className={`pb-2 ${activeTab === "reviews" ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-600"}`}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews
        </button>
      </div>
      {activeTab === "description" && <p className="mt-4">{description}</p>}
      {activeTab === "reviews" && (
        <div className="mt-4">
          {reviews.length > 0 ? (
            reviews.map((review, index) => (
              <div key={index} className="mb-4">
                <h3 className="font-semibold">{review.name}</h3>
                <p>{review.comment}</p>
              </div>
            ))
          ) : (
            <p>No reviews yet.</p>
          )}
        </div>
      )}
    </div>
  );
}
