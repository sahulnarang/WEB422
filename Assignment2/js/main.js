/*********************************************************************************
* WEB422 – Assignment 2
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: Sahul Narang    Student ID:  136560166    Date: february 9, 2018
*
*
********************************************************************************/

$(document).ready(function () {
    let employeesModal = [];

    initializeEmployeesModel = () => {
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: "https://web422-api-team.herokuapp.com/employees",
                type: "GET",
                contentType: "application/json"

            }).done(function (employees) {
                // console.log("into the get call");
                // let header = $("<h3>").text("Employees")
                // container.empty();
                // container.append(header).append(JSON.stringify(employees));

                employeesModal = _.take(employees, 300);
                refreshEmployeeRows(employeesModal);
                //console.log(employeesModal);

            }).fail(function (err) {
                showGenericModal('Error', 'Unable to get Employees');
                console.log("error: " + err.statusText);
            });
        })
    }




        function getFilteredEmployeesModel(filterString) {
            let lowCaseString = filterString.toLowerCase()
            let filter1 = _.filter(employeesModal, function (filterString) {
                if (filterString.FirstName.toLowerCase().indexOf(lowCaseString) != -1 ||
                    filterString.LastName.toLowerCase().indexOf(lowCaseString) != -1 ||
                    filterString.Position.PositionName.toLowerCase().indexOf(lowCaseString) != -1) {
                    return true;
                }
                else {
                    return false;
                }
    
            });// => objects for ['barney']
            return filter1;
    
        }
    function getEmployeeModelById(id) {
        let eid = _.findIndex(employeesModal, function (employee) {
            return employee._id === id;
        });
        if (eid != -1) return _.cloneDeep(employeesModal[eid]);
        else null;
    }


    // getEmployeeModelById = (id) => {
    //     let emp_ID = _.findIndex(employeesModal, function (employees) {
    //         return employeesModal._id == id;
    //     });


    //     if (emp_ID != -1) {
    //         return _.cloneDeep(employeesModal[emp_ID]);
    //     }

    //     else {
    //         return null;
    //     }
    // }


    function showGenericModal(title, message) {


        $(".modal-title").append(title);
        $(".modal-body").append(message);
        $("#genericModal").modal();


    }


    function refreshEmployeeRows(employees) {
        
        let rowTemplate = _.template(
            '<% _.forEach(employees, function(employee) { %>' +
            '<div class="row body-row" data-id=<%- employee._id %>>' +
            '<div class="col-xs-4 body-column"><%- employee.FirstName %></div>' +
            '<div class="col-xs-4 body-column"><%- employee.LastName %></div>' +
            '<div class="col-xs-4 body-column"><%- employee.Position.PositionName %></div>' +
            '</div>' +
            '<% }); %>');
    
        let rows = rowTemplate({ 'employees': employees });

        $("#employees-table").empty();
        $("#employees-table").append(rows);

    }



    
    initializeEmployeesModel();
    
    $("#employee-search").on("keyup", function () {
        let searchbox = $("#employee-search").val();
        refreshEmployeeRows(getFilteredEmployeesModel(searchbox));

    });


    $(".bootstrap-header-table").on("click", ".body-row", function () {

        let emp_Id = $(this).attr("data-id");
        let emp_Selected = getEmployeeModelById(emp_Id);
        let h_Date = moment(emp_Selected.hireDate).format("LL");
        emp_Selected.HireDate = h_Date;
        let genModalTemplate = _.template(
            '<strong>Address:</strong> <%- employee.AddressStreet %> <%- employee.AddressCity %> <%- employee.AddressState %> <%- employee.AddressZip %><br>' +
            '<strong>Phone Number:</strong> <%-employee.PhoneNum %><br>' +
            '<strong>Hire Date:</strong> <%- employee.HireDate %>');
        $("#genericModal").modal({
            backdrop: 'static',
            keyboard: false,
        });
        $(".modal-title").empty();
        $(".modal-body").empty();
        $(".modal-title").text(
            emp_Selected.FirstName + " " + emp_Selected.LastName);
        console.log(genModalTemplate({ 'employee': emp_Selected }));
        $(".modal-body").html(genModalTemplate({ 'employee': emp_Selected }));
    });




});