import React from 'react';
import './HomeScreen.css';
import { ListGroup, ListGroupItem } from 'reactstrap';
import CreateBlogPosts from '../../components/CreateBlogPosts';
import RecentSpinDisplay from '../../components/RecentSpinDisplay';
import { Posters } from './../../components/Posters/Posters';
import { TwitchEmbed, TwitchChat, TwitchClip, TwitchPlayer } from 'react-twitch-embed';

class HomeScreen extends React.Component {

	render() {
		return(
			<div className="home-pg">
				<div className="header-img">&nbsp;
				
						</div>
				<div className="news-events">
				
					<h1>Announcements</h1>
					
					<ListGroup flush>
						{/* <ListGroupItem> (11/4/2020) DJ volunteer application opens</ListGroupItem> */}
						<ListGroupItem>(1/4/2021) Winter Schedule Begins</ListGroupItem>
						<ListGroupItem> <a href="https://docs.google.com/forms/d/e/1FAIpQLScvmJ5eNf0V_EhbCQv_sA4iyi-QR0cz5V_CMJ3aATpsZHjl1w/viewform" target="_blank"><h1> 
						(11/4/2020) DJ Volunteer Application Opens </h1></a> </ListGroupItem>
							<ListGroupItem>(10/13/2020) Rainy Dawg Blawg Volunteer Application Opened</ListGroupItem>
						<ListGroupItem> (6/4/2020) BIRTHDAY FEST 2020 (Tanukichan, Dirty Projectors, Yves Tumor)</ListGroupItem>
						{/*<ListGroupItem>(5/29/2020) Episode 8 RDR Virtual Show (Archival Image, Midwife)</ListGroupItem>
						<ListGroupItem>(5/22/2020) Episode 7 RDR Virtual Show (Your Heart Breaks, Diners)</ListGroupItem>
						<ListGroupItem>(5/16/2020) EMERALD NOISE Online Charity Music Event</ListGroupItem>
						<ListGroupItem>(5/15/2020) Episode 6 RDR Virtual Show (Young NTG, Open Mike Eagle)</ListGroupItem>
						<ListGroupItem>(5/8/2020) Episode 5 RDR x WAC Virtual Show (Rain on Fridays, Squirrel Flower, Sasami)</ListGroupItem>
						/*
						<ListGroupItem>(4/10/2020) Episode 2 RDR Virtual Show!</ListGroupItem>
						<ListGroupItem>(4/10/2020) Episode 1 RDR Virtual Show!</ListGroupItem>
						<ListGroupItem>(4/5/2020) Rainy Dawg Radio Twitch Stream Online</ListGroupItem>
						<ListGroupItem>(3/15/2020) New website up!</ListGroupItem>
						*/}
					</ListGroup>
				</div>
				{/* <p className="tag">(scroll to view more)</p> */}
				<div className="twitch-poster">
				
				<div>
					<div className="blog-container">
					<div>
						<div>
						<a href="http://rainydawg.org:8000/stream" target="_blank"><h1> 
						Alternate Stream Link </h1></a>
							<h1>Most Recent Blog Posts</h1>
							<CreateBlogPosts />
						</div>
					</div>
					<a href="https://rainydawgradioblog.tumblr.com/">Want the whole blog? Click here!</a>
				</div>
						{/* <h1>Start Listening In!</h1> */}
						
						{/* <div>
							<TwitchEmbed
								id="twitch-content"
								channel="rainydawgradio"
								width="inherit"
								theme="dark"
								muted
								onVideoPause={() => console.log(':(')}
							/>
						</div> */}
					</div>
					<div>
						<Posters />
					</div>
				</div>
				{/* <div className="blog-container">
					<div>
						<div>
							<h1>Most Recent Blog Posts</h1>
							<CreateBlogPosts />
						</div>
					</div>
					<a href="https://rainydawgradioblog.tumblr.com/">Want the whole blog? Click here!</a>
				</div> */}
			</div>
		)
	}
}

export default HomeScreen;