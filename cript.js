let clients = JSON.parse(localStorage.getItem("clients")) || [];

displayClients();

function addClient() {

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const packagePlan = document.getElementById("package").value;

    if (name === "" || phone === "") {
        alert("Please fill all fields");
        return;
    }

    const client = {
        id: Date.now(),
        name: name,
        phone: phone,
        packagePlan: packagePlan,
        status: "Active"
    };

    clients.push(client);

    localStorage.setItem("clients", JSON.stringify(clients));

    displayClients();

    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
}

function displayClients() {

    const table = document.getElementById("clientTable");

    table.innerHTML = "";

    clients.forEach(client => {

        table.innerHTML += `
        <tr>
            <td>${client.name}</td>
            <td>${client.phone}</td>
            <td>${client.packagePlan}</td>
            <td>${client.status}</td>
        </tr>
        `;
    });

    document.getElementById("totalClients").textContent = clients.length;

    document.getElementById("activeClients").textContent =
        clients.filter(c => c.status === "Active").length;

    document.getElementById("inactiveClients").textContent =
        clients.filter(c => c.status === "Inactive").length;
}
