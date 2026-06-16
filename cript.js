let clients = JSON.parse(localStorage.getItem("clients")) || [];

displayClients();

function addClient() {

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const packagePlan = document.getElementById("package").value;
    const dueDate = document.getElementById("dueDate").value;

    if (name === "" || phone === "") {
        alert("Please fill all fields");
        return;
    }

 const today = new Date();
const expiry = new Date(dueDate);

const status = expiry >= today
    ? "Active"
    : "Inactive";

const client = {
    id: Date.now(),
    name: name,
    phone: phone,
    packagePlan: packagePlan,
    dueDate: dueDate,
    status: status
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
