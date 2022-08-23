import { Page, withModel } from '@adobe/aem-react-editable-components';
import { Person } from '@material-ui/icons';
import React from 'react';
import Navbar from './components/Navbar/Navbar';

// This component is the application entry point
class App extends Page {
  render() {
    return (
      <div>
        <Navbar/>
        {this.childComponents}
        {this.childPages}
      </div>
    )
  }
}

export default withModel(App);
