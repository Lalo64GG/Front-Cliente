export const createMessage = async (objectMessage) => {
  try {
    const response = await fetch("http://localhost:4000/messages/new", {
      method: "POST",
      body: JSON.stringify(objectMessage),
      headers: {
        "Content-Type": "application/json",
      },
      
    })
    const responseData = await response.json()
    console.log("Respuesta del post: ", responseData);
  } catch (error) {
    console.error("Error: ", error);
  }
}