import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadList from '../../components/shared/listed-books/ListedReadList';
import ListedWishList from '../../components/shared/listed-books/ListedWishList';

const Books = () => {
    return (
        <div className='container mx-auto my-3'>
            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <ListedReadList></ListedReadList>
                </TabPanel>
                <TabPanel>
                    <ListedWishList></ListedWishList>
                </TabPanel>
            </Tabs>      
        </div>
    );
};

export default Books;