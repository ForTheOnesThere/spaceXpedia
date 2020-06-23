import React, { Component } from 'react';
import './App.css';
import Countdown from '../Countdown/Countdown';
import LaunchInformation from '../LaunchInformation/LaunchInformation';
import NavBar from '../NavBar/NavBar';
import SearchBar from '../SearchBar/SearchBar';
import LookupViewer from '../LookupViewer/LookupViewer';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      viewMode: 'missions',
      database: [],
      isInfoView: false,
      resourceRequested: '',
      filteredDatabase: [],
    }
  }

  componentDidMount(){
    console.log('App successfully mounted!');
    this.buildDatabase();
  }


  buildDatabase = async () => {
    try{
      let r = await this.fetchLaunchData();
      let names = r.map(e=>e.mission_name);
      let launch_sites = r.map(e=>e.launch_site.site_name_long);
      let patchUrls = r.map(e=>e.links.mission_patch_small);
      let datesUNIX = r.map(e=>e.launch_date_unix);
      let details = r.map(e=>e.details);
      let videoUrls = r.map(e=>e.links.video_link);
      let primary_payloads = r.map(e=>e.rocket.second_stage.payloads[0].payload_id);
      let orbits = r.map(e=>e.rocket.second_stage.payloads[0].orbit);
      let payload_masses = r.map(e=>e.rocket.second_stage.payloads[0].payload_mass_kg);
      let success = r.map(e=>e.launch_success);

      let allRecords = [];
      for (let i=0;i<names.length;i++){
        let record = {
          id: i,
          name: names[i],
          date: datesUNIX[i],
          patchUrl: patchUrls[i],
          launchSite: launch_sites[i],
          details: details[i],
          videoUrl: videoUrls[i],
          primary_payload: primary_payloads[i],
          orbit: orbits[i],
          payload_mass: payload_masses[i],
          success: success[i],
        };
        allRecords.push(record);
      }

      this.setState({database: allRecords, filteredDatabase: allRecords});

    } catch (err) {console.log('Looks like somethings wrong...',err)}




  }


  fetchLaunchData = async () => {
    const response = await fetch('https://api.spacexdata.com/v3/launches/past');
    const data = await response.json();
    return data;
  }


  onMissionSearchClick = (event) => {
    this.setState({viewMode: 'missions', isInfoView: false});
  }

  onCoresSearchClick = (event) => {
    this.setState({viewMode: 'cores', isInfoView: false});
  }

  onPayloadsSearchClick = (event) => {
    this.setState({viewMode: 'payloads', isInfoView: false});
  }

  onUpcomingSearchClick = (event) => {
    this.setState({viewMode: 'upcoming', isInfoView: false});
  }

  resourceClick = (id) => {
    this.setState({resourceRequested: id, isInfoView: true});
  }

  goBack = () => {
    this.setState({isInfoView: false});
  }

  searchFunction = (event) => {
    switch (this.state.viewMode){
      case 'missions':
        let filteredList = [];
        let n;
          for (n of this.state.database) {
            if (n.name.toLowerCase().includes(event.target.value)){
              filteredList.push(n);
            }
          }
          this.setState({filteredDatabase: filteredList});
          break;
      default: return null;

    }
  }

  render(){
  return (
    <div className="App scroll-parent">
      <Countdown />
      <LaunchInformation />
      <NavBar onMissionSearchClick={this.onMissionSearchClick}
                 onCoresSearchClick={this.onCoresSearchClick}
                 onPayloadsSearchClick={this.onPayloadsSearchClick}
                 onUpcomingSearchClick={this.onUpcomingSearchClick}
                 currentView={this.state.viewMode}
      />
      <SearchBar back={this.goBack} search={this.searchFunction}/>
      <LookupViewer allData={this.state} resourceClick={this.resourceClick}/>
    </div>
  )
}

}

export default App;
