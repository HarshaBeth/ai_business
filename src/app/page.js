'use client'
import Chat from "@/components/Chat";
import Compiler from "@/components/Compiler";
import Contact from "@/components/Contact";
import CostCalculator from "@/components/CostCalculator";
import Form from "@/components/Form";
import Homepage from "@/components/Homepage";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState([]);
  const [nums, setNums] = useState([]);

  const formDataChange = (newData) => {
    setFormData(newData);
  }
  const numsUpdate = (numsData) => {
    setNums(numsData);
  }


  return (
    <>
      <Homepage />
      <Form formData={formData} formDataChange={formDataChange} />
      <Chat formData={formData}/>
      <Compiler />
      <CostCalculator />
      <Contact />
    </>
  );
}
