import * as React from 'react';
import type {NextPage} from 'next';
import {LayoutRoot, Page, PageContent, PageHeader} from '~/component/layout';
import DriverList from "~/component/ui/DriverList/driver-list";
import SideBar from "~/component/ui/SideBar/side-bar";
import DriverListHeader from "~/component/ui/DriverListHeader/driver-list-header";
import Pagination from "~/component/ui/Pagination/pagination";
import {DriverListContainer} from "~/component/ui/DriverList/driver-list.typed";

const IndexPage: NextPage = () => {
    return (
        <LayoutRoot>
            <Page>
                <PageHeader/>
                <PageContent style={{paddingTop: '100px', display: 'flex', flexDirection: 'row'}}>
                    <SideBar/>
                    <DriverListContainer>
                        <DriverListHeader/>
                        <DriverList/>
                        <Pagination/>
                    </DriverListContainer>
                </PageContent>
            </Page>
        </LayoutRoot>
    );
};

export default IndexPage;