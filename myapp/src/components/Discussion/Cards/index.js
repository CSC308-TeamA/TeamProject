import React from 'react';
import { useHistory } from "react-router-dom";
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'
import {
  CardHoover,
  UpdateText,
  DescriptionText,
  NavLink
} from './CardElements';

function Cards() {
  const information = [
    {
      route: '/thread',
      title: '📢Announcements',
      description: 'Announcements/FAQs/Logistics',
      threads: '🧵 2 Threads',
      posts: '💬 5 Posts',
    },
    {
      route: '/thread',
      title: '✒️General',
      description: 'General logisitics about the team and other information.',
      threads: '🧵 2 Threads',
      posts: '💬 5 Posts',
    },
    {
      route: '/thread',
      title: '🤖Robot',
      description: 'General discussion about the robots.',
      threads: '🧵 2 Threads',
      posts: '💬 5 Posts',
    },
    {
      route: '/thread',
      title: '⚔️Competition',
      description: 'Talk about the competition here.',
      threads: '🧵 2 Threads',
      posts: '💬 5 Posts',
    },
  ];

  const list = information.map((row, index)  => {
    return (
      <>
        <Accordion defaultActiveKey="0">
          <CardHoover key={ index }>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              <Card.Body>
                <Card.Title>            
                  <NavLink to={ row.route } activeStyle>
                    { row.title }
                  </NavLink>
                </Card.Title>
                <DescriptionText>
                  { row.description }
                </DescriptionText>
                <UpdateText>
                  <p>{ row.threads }</p>
                  <p>{ row.posts }</p>
                </UpdateText>
              </Card.Body>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                Hello! I'm the body
              </Card.Body>
            </Accordion.Collapse>
          </CardHoover>
        </Accordion>
      </>
    );
  });

  return (
    <>
        {list}
    </>
  );
}

export default Cards;