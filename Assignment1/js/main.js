/*********************************************************************************
* WEB422 – Assignment 1
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: Sahul Narang      Student ID: 136560166    Date: 1/26/2018
*
*
********************************************************************************/ 
$(document).ready(function () {
    let container = $("#data");
    let employeesmenu = $("#employees");
    let teamsmenu = $("#teams");
    let positionsmenu = $("#positions");
    let projectsmenu = $("#projects");


    console.log("jquery working");


    employeesmenu.on("click", function () {
        event.preventDefault();
        console.log("default action prevented");
        //container.append("<h1>This is included text</h1>")
        $.ajax({
            url: "https://web422-api-team.herokuapp.com/employees",
            type: "GET",
            contentType: "application/json"

        }).done(function (employees) {
            console.log("into the get call");
            let header = $("<h3>").text("Employees")
            container.empty();
            container.append(header).append(JSON.stringify(employees));

        }).fail(function (err) {
            console.log("error: " + err.statusText);
        })
    });

    teamsmenu.on("click", function () {
        event.preventDefault();
        console.log("default action prevented");
        //container.append("<h1>This is included text</h1>")
        $.ajax({
            url: "https://web422-api-team.herokuapp.com/teams",
            type: "GET",
            contentType: "application/json"

        }).done(function (teams) {
            console.log("into the get call");
            let header = $("<h3>").text("Teams")
            container.empty();
            container.append(header).append(JSON.stringify(teams));

        }).fail(function (err) {
            console.log("error: " + err.statusText);
        })
    });

    projectsmenu.on("click", function () {
        event.preventDefault();
        console.log("default action prevented");
        //container.append("<h1>This is included text</h1>")
        $.ajax({
            url: "https://web422-api-team.herokuapp.com/projects",
            type: "GET",
            contentType: "application/json"

        }).done(function (projects) {
            console.log("into the get call");
            let header = $("<h3>").text("Projects")
            container.empty();
            container.append(header).append(JSON.stringify(projects));

        }).fail(function (err) {
            console.log("error: " + err.statusText);
        })
    });


    positionsmenu.on("click", function () {
        event.preventDefault();
        console.log("default action prevented");
        //container.append("<h1>This is included text</h1>")
        $.ajax({
            url: "https://web422-api-team.herokuapp.com/positions",
            type: "GET",
            contentType: "application/json"

        }).done(function (positions) {
            console.log("into the get call");
            let header = $("<h3>").text("Positions")
            container.empty();
            container.append(header).append(JSON.stringify(positions));

        }).fail(function (err) {
            console.log("error: " + err.statusText);
        })
    });

});

