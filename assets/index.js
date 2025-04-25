imageInput.addEventListener('change', (event) => {
    upload.classList.remove("upload_loaded");
    upload.classList.add("upload_loading");
    upload.removeAttribute("selected");

    const file = imageInput.files[0];

    if (!file) {
        upload.classList.remove("upload_loading");
        return;
    }

    const data = new FormData();
    data.append("image", file);

    fetch('https://api.imgur.com/3/image', {
        method: 'POST',
        headers: {
            'Authorization': 'Client-ID 4ecc257cbb25ccc'
        },
        body: data
    })
    .then(result => result.json())
    .then(response => {
        if (response.success && response.data && response.data.link) {
            const url = response.data.link;
            upload.classList.remove("error_shown");
            upload.setAttribute("selected", url);
            upload.classList.add("upload_loaded");
            upload.classList.remove("upload_loading");
            upload.querySelector(".upload_uploaded").src = url;
        } else {
            throw new Error("Upload failed");
        }
    })
    .catch((error) => {
        console.error("Image upload error:", error);
        upload.classList.remove("upload_loading");
        upload.classList.add("error_shown");
    });
});
