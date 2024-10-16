let formData = {
    form: {
      firstname: "first name",
      lastname: "last name",
      email: "email@domain.com",
      password: "f02368945726d5fc2a14eb576f7276c0",
    },
  };
  
  formData.form.password = md5(formData.form.password);
  
  let url = "http://localhost:3000/";
  
  let headers = new Headers({
    "Content-Type": "application/json",
  });
  
  let request = new Request(url, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(formData),
  });
  
  fetch(request)
    .then(function (response) {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("Failed to send the request");
      }
    })
    .then(function (data) {
      console.log("Response from the server:", data);
    })
    .catch(function (error) {
      console.error("Error:", error);
    });
  
