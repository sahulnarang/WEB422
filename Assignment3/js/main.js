/*********************************************************************************
* WEB422 – Assignment 03
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of this
* assignment has been copied manually or electronically from any other source (including web sites) or
* distributed to other students.
*
* Name: Sahul Narang     Student ID: 136560166   Date: February 23, 2018
*
********************************************************************************/ 

let viewModel = {
    teams: ko.observable([]),
    employees: ko.observable([]),
    projects: ko.observable([])

};

function initializeTeams() {
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: "https://web422-api-team.herokuapp.com/teams-raw",
            type: "GET",
            contentType: "application/json"

        }).done(function (data) {
            viewModel.teams = ko.mapping.fromJS(data);
            console.log("initialize of teams done");
            resolve();

        }).fail(function (err) {
            reject("Error loading the employee data");
        });
    })
}

function initializeEmployees() {
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: "https://web422-api-team.herokuapp.com/employees",
            type: "GET",
            contentType: "application/json"
        }).done(function (data) {
            viewModel.employees = ko.mapping.fromJS(data);
            resolve();
            console.log("initialize of employees done");
        }).fail(function (err) {
            // console.log("");
            reject("Error loading the employee data");
        })
    })
}

function initializeProjects() {
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: "https://web422-api-team.herokuapp.com/projects",
            method: "GET",
            contentType: "application/json"
        })
            .done(function (data) {

                viewModel.projects = ko.mapping.fromJS(data);
                resolve();
            })
            .fail(function (err) {
                reject("Error loading the team data.");
            });
    });
}


function showGenericModal(title, message) {


    // $(".modal-title").append(title);
    // $(".modal-body").append(message);
    // $("#genericModal").modal();

    $("#genericModal").modal ({
        backdrop: 'static', 
        keyboard: false, 
    });
    $(".modal-title").empty();
    $(".modal-body").empty();
    $(".modal-title").text(title);
    $(".modal-body").html(message);


}


function saveTeam(){
    
    let currentTeam = this;

    $.ajax({
        url: 'https://web422-api-team.herokuapp.com/team/' + currentTeam._id(),
        method: 'PUT',
        data: JSON.stringify({
            "Projects" : currentTeam.Projects(),
            "Employees" : currentTeam.Employees(),
            "TeamLead" : currentTeam.TeamLead()
        }),
        contentType: 'application/json'
    }).done(function(data){
        showGenericModal("Success", "[ "+currentTeam.TeamName()+" ] Updated Successfully" );
    }).fail(function(data){
        showGenericModal("Error", "Error updating the team information");
    })
    
}




$(document).ready(function () {

    initializeTeams()
        .then(initializeEmployees)
        .then(initializeProjects)
        .then(function () {
            console.log("applying biniginds");
            ko.applyBindings(viewModel);
            $("select.multiple").multipleSelect({ filter: true });
            $("select.single").multipleSelect({ single: true, filter: true })
        }).catch(function (err) {
            showGenericModal('Error', err);

        });

});