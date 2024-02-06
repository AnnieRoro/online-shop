const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			characters :  [],
			detailsCharacter : [],
			planets: [],
			detailsPlanet:[],
			starship: [],
			detailsStarship: [],
			favorites: [],
			
		},
		actions: {
			getCharacters: async () => {
				const url = "https://www.swapi.tech/api/people/";
				const options = {
					method: "GET"
				}
				const response = await fetch (url, options);
				if (!response.ok){
					console.log('Error:', response.status, response.statusText)
					return response.status
				}
				const data = await response.json()
				console.log(data.results)
				setStore({characters:data.results})
			},
			getPlanets: async () => {
				const url = "https://www.swapi.tech/api/planets/";
				const options = {
					method: "GET"
				}
				const response = await fetch (url, options);
				if (!response.ok){
					console.log('Error:', response.status, response.statusText)
					return response.status
				}
				const data = await response.json()
				console.log(data.results)
				setStore({planets:data.results})
			},
			getStarship: async () => {
				const url = "https://www.swapi.tech/api/starships/";
				const options = {
					method: "GET"
				}
				const response = await fetch (url, options);
				if (!response.ok){
					console.log('Error:', response.status, response.statusText)
					return response.status
				}
				const data = await response.json()
				console.log(data.results)
				setStore({starship:data.results})
			},
			addFavorites: (newFavorite) => {
				setStore({ favorites: [...getStore().favorites, newFavorite]})
			},
			removeFavorites: (item, array) => {
				setStore({favorites: array.filter((element) => element != item)})
			},

			getCharacterDetails: async (id) => {
				const url = `https://www.swapi.tech/api/people/${id}`;
				const options = {
					method: "GET"
				}
				const response = await fetch (url, options);
				if (!response.ok){
					console.log('Error:', response.status, response.statusText)
					return response.status
				}
				const data = await response.json()
				console.log(data.result.properties)
				setStore({detailsCharacter:data.result.properties})
			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
