import React from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const api = import.meta.env.local.VITE_API_KEY
export default function PoemBox() {
  function fetchPoem() {
    try {
      const genAI = new GoogleGenerativeAI(api)
    }
  }
}
