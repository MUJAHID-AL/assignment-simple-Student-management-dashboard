 $(document).ready(function () {
            $("button.btn-primary").on("click", function () {
                let name = prompt("enter name");
                let id = prompt("enter id");
                let status = prompt("enter status");
                let newrow = `<tr>
                    <td>${name}</td>
                    <td>${id}</td>
                    <td><span class="badge bg-${status === 'Active' ? 'success' : status === 'Inactive' ? 'danger' : 'warning'}">${status}</span></td>
                    <td><button class="btn btn-danger">Delete</button></td>
                </tr>`;
                $("tbody").append(newrow);
            });
        });
