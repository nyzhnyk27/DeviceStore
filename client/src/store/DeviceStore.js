import {makeAutoObservable} from "mobx"

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: "Смартфони"},
            {id: 2, name: "Планшети"},
            {id: 3, name: "Ноутбуки"},
            {id: 4, name: "Навушники"}
        ]
        this._brands = [
            {id: 1, name: "Apple"},
            {id: 2, name: "Samsung"},
            {id: 3, name: "Google"},
            {id: 4, name: "Xiaomi"}
            

        ]
        this._devices = [
            {id: 1, name: "iPhone 14 Pro Max", price: 67999, rating: 5, img: `https://content1.rozetka.com.ua/goods/images/big/284924170.jpg`},
            {id: 2, name: "iPhone 14 Pro Max", price: 67999, rating: 5, img: `https://content1.rozetka.com.ua/goods/images/big/284924170.jpg`},
            {id: 3, name: "iPhone 14 Pro Max", price: 67999, rating: 5, img: `https://content1.rozetka.com.ua/goods/images/big/284924170.jpg`},
            {id: 4, name: "iPhone 14 Pro Max", price: 67999, rating: 5, img: `https://content1.rozetka.com.ua/goods/images/big/284924170.jpg`},
            {id: 5, name: "iPhone 14 Pro Max", price: 67999, rating: 5, img: `https://content1.rozetka.com.ua/goods/images/big/284924170.jpg`},
            {id: 6, name: "iPhone 14 Pro Max", price: 67999, rating: 5, img: `https://content1.rozetka.com.ua/goods/images/big/284924170.jpg`},
            {id: 7, name: "iPhone 14 Pro Max", price: 67999, rating: 5, img: `https://content1.rozetka.com.ua/goods/images/big/284924170.jpg`},
            {id: 8, name: "iPhone 14 Pro Max", price: 67999, rating: 5, img: `https://content1.rozetka.com.ua/goods/images/big/284924170.jpg`},
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }
    setSelectedType(type) {
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
}