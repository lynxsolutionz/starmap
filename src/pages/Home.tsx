import React from 'react'
import Layout from 'layout/Layout'

type S = {
	lat: number
	lng: number
	date: string
	time: string
	height: number
	width: number
	starmap_link: string
}

const Home = () => {

	const [stateProps, setStateProps] = React.useState<S>({
		lat: 0,
		lng: 0,
		date: getDate(undefined),
		time: getTime(),
		height: 0,
		width: 0,
		starmap_link: 'https://bulma.io/images/placeholders/640x480.png'
	})

	const handleOnChangeDate = (date: Date | null) => {
		if (date === null)
			return ""
		return getDate(date)
	}

	const hanleClickGenerateStarmap = () => {

		console.log(stateProps);
		

		let { lat, lng, date, time, height, width } = stateProps

		let formatted_date = getFormattedDate(date)
		let formatted_time = getFormattedTime(time)
		
		let query_string = `lat=${lat}&lng=${lng}&date=${formatted_date}&time=${formatted_time}&height=${height}&width=${width}`

		makeAPIRequest(query_string)
	}

	const makeAPIRequest = async (query_string: string) => {
		let api_endpoint = "https://starmap-generator.ew.r.appspot.com" 
		let resource_url = api_endpoint + "?" +query_string
		
		let server_response = await fetch(resource_url)
		const data = await server_response.json()
		console.log(data)

		let generated_starmap_link = data["link"] 

		setStateProps({...stateProps, starmap_link: generated_starmap_link})
	}

	console.log(stateProps)

	return <Layout>
		<div className="section hero-body">
			<div className="columns">
				<div className="column is-two-thirds">
					<div className="">
						<img src={stateProps.starmap_link} className="image" alt="starmap"/>
					</div>
				</div>
				<div className="column">
					<div>
						<label>Location</label>
						<div className="columns is-mobile">
							<div className="column is-half">
								<input type="number" className="input" placeholder="latitude"
									onChange={(e) => setStateProps({...stateProps, lat: parseFloat(e.target.value)})} />
							</div>
							<div className="column is-half">
								<input type="number" className="input" placeholder="longitude"
									onChange={(e) => setStateProps({...stateProps, lng: parseFloat(e.target.value)})} />
							</div>
						</div>
					</div>
					<div>
						<label>Date</label>
						<input type="date" className="input" defaultValue={stateProps.date}	
							onChange={(e) => setStateProps({...stateProps, date: handleOnChangeDate(e.target.valueAsDate)})}/>
					</div>
					<div>
						<label>Time</label>
						<input type="time" className="input" defaultValue={stateProps.time}
							onChange={(e) => setStateProps({...stateProps, time: e.target.value})}/>
					</div>
					<div>
						<label>Design Dimensions</label>
						<div className="columns is-mobile">
							<div className="column is-half">
								<input type="number" className="input" placeholder="width"
									onChange={(e) => setStateProps({...stateProps, width: parseInt(e.target.value)})} />
							</div>
							<div className="column is-half">
								<input type="number" className="input" placeholder="height"
									onChange={(e) => setStateProps({...stateProps, height: parseInt(e.target.value)})} />
							</div>
						</div>
					</div>
					<div style={{marginTop: "0.5rem"}}>
						<button className="button has-background-primary" onClick={() => hanleClickGenerateStarmap()}>Generate Starmap</button>
					</div>
				</div>
			</div>
		</div>
	</Layout>
}

export default Home


const getDate = (date: Date | undefined) => {
	let d = date || new Date()
	let currDate = d.getDate()
	let currMonth = d.getMonth()+1
	let currYear = d.getFullYear()
	return currYear + "-" + ((currMonth<10) ? '0'+currMonth : currMonth )+ "-" + ((currDate<10) ? '0'+currDate : currDate )
}

const getTime = () => {
	let date = new Date()
	let hours = date.getHours()
	let mins = date.getMinutes()
	return (hours < 9 ? "0" + hours : hours)  + ":" + (mins < 9 ? "0" + mins : mins)
}

// dd.mm.yyyy
const getFormattedDate = (date: string) => {
	let splitted_date = date.split("-")
	return `${splitted_date[2]}.${splitted_date[1]}.${splitted_date[0]}`
}

// hh.mm.ss
const getFormattedTime = (time: string) => {
	return time.replace(":", ".") + ".00"
}