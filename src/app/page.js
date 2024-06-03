'use client'
import Chart from "@/components/Chart";
import Chat from "@/components/Chat";
import Contact from "@/components/Contact";
import Form from "@/components/Form";
import Homepage from "@/components/Homepage";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState([]);

  const formDataChange = (newData) => {
    setFormData(newData);
  }


  return (
    <>
      <Homepage />
      <Form formData={formData} formDataChange={formDataChange} />
      <Chat formData={formData}/>
      <Chart />
      <Contact />
    </>
  );
}
