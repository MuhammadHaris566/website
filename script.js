// Basic admin password (replace with a more secure method in real implementation)
let adminPassword = "owner123";

// Function to login as admin
function login() {
  const passwordInput = document.getElementById("admin-password").value;
  if (passwordInput === adminPassword) {
    document.getElementById("admin-controls").style.display = "block";
    document.getElementById("login-section").style.display = "none";
  } else {
    alert("Incorrect password!");
  }
}

// Function to change admin password
function changePassword() {
  const newPasswordInput = document.getElementById("new-password").value;
  if (newPasswordInput.trim() === "") {
    alert("Please enter a new password.");
    return;
  }
  adminPassword = newPasswordInput; // Update the password
  alert("Password changed successfully!");
  document.getElementById("new-password").value = ""; // Clear the input
}

// Function to add content (text and/or image)
function addContent() {
  const contentInput = document.getElementById("content-input").value;
  const imageUpload = document.getElementById("image-upload").files[0];
  const contentArea = document.getElementById("content-area");

  // Create a new div to hold the content
  const newContentDiv = document.createElement("div");

  // Add text if provided
  if (contentInput.trim() !== "") {
    const textParagraph = document.createElement("p");
    textParagraph.textContent = contentInput;
    newContentDiv.appendChild(textParagraph);
  }

  // Add image if provided
  if (imageUpload) {
    const image = document.createElement("img");
    image.src = URL.createObjectURL(imageUpload);
    image.style.maxWidth = "100%";
    image.style.height = "auto";
    newContentDiv.appendChild(image);
  }

  // Only append if there is some content
  if (newContentDiv.hasChildNodes()) {
    // Create a delete button for this content block
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-button";
    deleteButton.onclick = function() {
      contentArea.removeChild(newContentDiv);
    };
    newContentDiv.appendChild(deleteButton);

    contentArea.appendChild(newContentDiv);
  } else {
    alert("No content to add. Please add text, an image, or both.");
  }

  // Clear the input fields
  document.getElementById("content-input").value = "";
  document.getElementById("image-upload").value = "";
}

// Function to remove all content
function removeAllContent() {
  const contentArea = document.getElementById("content-area");
  contentArea.innerHTML = ""; // Clears all content
}
