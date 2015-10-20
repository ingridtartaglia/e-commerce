var myApp = angular.module('myApp', []);

myApp.controller('commerce', function($scope){
    $scope.drinks = [
        {
            img: "imgs/lemon.png",
            title: "Deli Lemonade",
            description: "Lemon, ginger and mint",
            price: "5"
        },
        {
            img: "imgs/grape.png",
            title: "Deli Grape",
            description: "Grape, apple and basil",
            price: "5"
        },
        {
            img: "imgs/carrot.png",
            title: "Deli Carrot",
            description: "Carrot, orange and mint",
            price: "5"
        },
        {
            img: "imgs/strawberry.png",
            title: "Deli Strawberry",
            description: "Strawberry, pineapple and basil",
            price: "6"
        },
        {
            img: "imgs/watermelon.png",
            title: "Deli Watermelon",
            description: "Watermelon, pepper and cucumber",
            price: "7"
        },
        {
            img: "imgs/pineapple.png",
            title: "Deli Pineapple",
            description: "Pineapple, coconut and vanilla",
            price: "7"
        },
    ];

});
