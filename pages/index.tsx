import * as React from 'react';
import type {NextPage} from 'next';
import {LayoutRoot, Page, PageContent, PageHeader} from '~/component/layout';
import DriverList from "~/component/ui/DriverList/driver-list";
import SideBar from "~/component/ui/SideBar/side-bar";

const IndexPage: NextPage = () => {
    return (
        <LayoutRoot>
            <Page>
                <PageHeader/>
                <PageContent style={{paddingTop: '100px', display: 'flex', flexDirection: 'row'}}>
                    <SideBar/>
                    <DriverList/>
                </PageContent>
            </Page>
        </LayoutRoot>
    );
};

export default IndexPage;