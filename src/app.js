import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

import Header from './Header';
import Post from './Post';

class App extends Component {
  state = {
    posts: [
      {
        avatar_url: 'https://www.shareicon.net/data/128x128/2015/09/24/106420_man_512x512.png',
        author: 'Bruno Pinheiro',
        time: '5',
        content:
          'Bacon ipsum dolor amet cupim meatloaf burgdoggen, porchetta flank brisket pig short loin fatback shankle alcatra bacon pancetta. Drumstick boudin spare ribs ham andouille hamburger pastrami. Spare ribs tail filet mignon, sirloin shankle rump alcatra meatloaf landjaeger prosciutto. Kielbasa shoulder strip steak landjaeger corned beef. Corned beef tongue frankfurter sirloin boudin bacon leberkas picanha pork belly short loin swine pastrami kielbasa drumstick pork loin. Tail cow cupim shank brisket short ribs pastrami pork chop turducken porchetta jerky corned beef chuck prosciutto pancetta. Corned beef jerky cow, bresaola ribeye biltong pancetta capicola tenderloin spare ribs sausage rump landjaeger.',
      },
      {
        avatar_url: 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png',
        author: 'Renata Souza',
        time: '3',
        content:
          'Turducken ham hock shoulder alcatra ball tip. Cupim meatloaf ball tip capicola sirloin. Pastrami capicola tail, strip steak jowl leberkas cupim turducken. Ground round capicola cow, pig alcatra frankfurter sausage meatball t-bone cupim landjaeger flank porchetta tongue venison. Chicken t-bone sirloin pork loin, leberkas beef chuck salami bacon.',
      },
      {
        avatar_url:
          'data:image/png;base64,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',
        author: 'João Silva',
        time: '1',
        content:
          'Pork loin short ribs shankle pancetta, pork chop meatloaf turducken pork belly landjaeger jerky brisket alcatra corned beef ham. Pork hamburger landjaeger drumstick bacon andouille tenderloin pork chop fatback kielbasa beef ribs. Sirloin short loin venison flank pig. Pork salami pork belly, tri-tip rump ball tip beef ribs jerky swine corned beef drumstick doner. Andouille hamburger meatball capicola cupim leberkas turducken sirloin. Frankfurter brisket tenderloin beef bacon landjaeger cow venison. Pig bacon alcatra jerky corned beef tongue flank jowl boudin porchetta rump hamburger.',
      },
    ],
  };

  render() {
    return (
      <Fragment>
        <Header title="RocketBook" />
        {this.state.posts.map(post => <Post data={post} key={post.avatar_url} />)}
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
