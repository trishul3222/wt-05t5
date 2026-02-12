async function fetchData() {
    try {
        document.getElementById("loading").style.display = "block";

        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        const users = await response.json();
        renderData(users);

        // Show fetch time
        document.getElementById("timestamp").innerText =
            "Data fetched at: " + new Date().toLocaleTimeString();

    } catch (error) {
        alert("Error fetching user data");
        console.error(error);
    } finally {
        document.getElementById("loading").style.display = "none";
    }
}

function renderData(users) {
    const dataBody = document.getElementById("dataBody");
    dataBody.innerHTML = "";

    users.forEach(user => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
        `;
        dataBody.appendChild(row);
    });
}
