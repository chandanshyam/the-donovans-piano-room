"use client";

import React, { useState, useEffect } from "react";

interface FlipbookData {
  url: string;
  // Add other properties as needed
}

const fetchFlipbook = async (pdfLink: string, apiKey: string): Promise<FlipbookData> => {
  const url = `https://heyzine.com/api1/rest?pdf=${encodeURIComponent(
    pdfLink,
  )}&k=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data: FlipbookData = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching flipbook:", error);
    throw error;
  }
};

const FlipbookViewer = () => {
  const [flipbookData, setFlipbookData] = useState<FlipbookData | null>(null);
  const pdfLink =
    "https://testformyjournal.s3.us-east-2.amazonaws.com/FullPlanner.pdf";
  const apiKey = "d17fbe1594e35101";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchFlipbook(pdfLink, apiKey);
        setFlipbookData(data);
      } catch (error) {
        console.error("Error fetching flipbook data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {flipbookData ? (
        <iframe
          src={flipbookData.url}
          className="h-full w-full border-none"
          title="Flipbook"
        ></iframe>
      ) : (
        <p className="text-center">Loading flipbook...</p>
      )}
    </div>
  );
};

export default FlipbookViewer;
