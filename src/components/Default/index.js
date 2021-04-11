import React from 'react';
import { Card, MenuItem, MenuList, CardContent, CardHeader } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ROUTES from '../../shared/constants/routes';

/**
 * @description load project routes
 */
function index() {
    return (
        <div>
            <Card>
                <CardHeader
                    title="Contents"
                />
                <CardContent>
                    <MenuList>
                        <MenuItem><Link to={ROUTES.FIND_MY_DOG}>FIND MY DOG</Link></MenuItem>
                        <MenuItem><Link to={ROUTES.CAMPAIGN_PERFORMANCE}>CAMPAIGN PERFORMANCE</Link></MenuItem>
                    </MenuList>
                </CardContent>
            </Card>
        </div>
    )
}

export default index
