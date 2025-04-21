document.addEventListener("DOMContentLoaded", () => {
  const allOrders = JSON.parse(localStorage.getItem("orders")) || [];

  const displayOrders = (ordersToDisplay) => {
    const ordersContainer = document.getElementById("ordersContainer");
    ordersContainer.innerHTML = "";

    ordersToDisplay.forEach((order) => {
      const toppingsList = Array.isArray(order.toppings)
        ? order.toppings.join(", ")
        : "No toppings selected";
      const extrasList = Array.isArray(order.extras)
        ? order.extras.join(", ")
        : "No extras selected";

      const orderDiv = document.createElement("div");
      orderDiv.classList.add("order-item");

      orderDiv.innerHTML = `
                <p><strong>Order ID:</strong> ${order.id}</p>
                <p><strong>Customer:</strong> ${order.customerName}</p>
                <p><strong>Pancake Type:</strong> ${order.selectedPancake}</p>
                <p><strong>Toppings:</strong> ${toppingsList}</p>
                <p><strong>Extras:</strong> ${extrasList}</p>
                <p><strong>Delivery:</strong> ${order.deliveryMethod}</p>
                <p><strong>Total:</strong> ${order.totalPrice}€</p>
                <select onchange="updateOrderStatus(${order.id}, this.value)">
                    <option value="Waiting" ${
                      order.status == "Waiting" ? "selected" : ""
                    }>Waiting</option>
                    <option value="Ready" ${
                      order.status == "Ready" ? "selected" : ""
                    }>Ready</option>
                    <option value="Delivered" ${
                      order.status == "Delivered" ? "selected" : ""
                    }>Delivered</option>
                </select>
                ${
                  order.status === "Delivered"
                    ? `<button class="remove-btn" onclick="removeOrder(${order.id})">Remove</button>`
                    : ""
                }
            `;
      ordersContainer.appendChild(orderDiv);
    });
  };

  window.updateOrderStatus = function (orderId, newStatus) {
    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    const orderIndex = orders.findIndex((order) => order.id == orderId);

    if (orderIndex !== -1) {
      orders[orderIndex].status = newStatus;
      localStorage.setItem("orders", JSON.stringify(orders));
      displayOrders(orders);
    }
  };

  window.removeOrder = function (orderId) {
    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders = orders.filter((order) => order.id != orderId);
    localStorage.setItem("orders", JSON.stringify(orders));
    displayOrders(orders);
  };

  window.searchOrders = function () {
    const searchTerm = document
      .getElementById("searchInput")
      .value.toLowerCase();
    const filteredOrders = allOrders.filter((order) => {
      return (
        order.customerName.toLowerCase().includes(searchTerm) ||
        order.id.toString().includes(searchTerm)
      );
    });
    displayOrders(filteredOrders);
  };

  window.sortOrders = function () {
    const selectedStatus = document.getElementById("sortSelect").value;
    let sortedOrders = [...allOrders];

    if (selectedStatus == "waiting") {
      sortedOrders = sortedOrders.filter((order) => order.status == "waiting");
    } else if (selectedStatus == "ready") {
      sortedOrders = sortedOrders.filter((order) => order.status == "ready");
    } else if (selectedStatus == "delivered") {
      sortedOrders = sortedOrders.filter(
        (order) => order.status == "delivered"
      );
    }

    displayOrders(sortedOrders);
  };

  displayOrders(allOrders);
});
