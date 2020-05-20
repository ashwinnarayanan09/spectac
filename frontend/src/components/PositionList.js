import React, { Component } from 'react';
import {Container} from 'reactstrap';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CustomizedTables from "./CustomisedTables";

class PositionList extends Component {

    constructor(props) {
        super(props);
        this.state = {positions: [], isLoading: true};
    }

    componentDidMount() {
        this.setState({isLoading: true});

        const url = 'api/positions';
        console.log(url)
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({positions: data, isLoading: false}));
        console.log("Positions:"+this.state);
    }

    render() {
        const {positions, isLoading} = this.state;
        console.log(this.state);
        if (isLoading) {
            return <p>Loading...</p>;
        }

        const positionList = positions.map(position => {
            return <tr key={position.id}>
                <td style={{whiteSpace: 'nowrap'}}>{position.name}</td>
                <td style={{whiteSpace: 'nowrap'}}>{position.city}</td>
                <td style={{whiteSpace: 'nowrap'}}>{position.country}</td>
            </tr>
        });


        return (
            <div>
                <Container fluid>
                    <Table className="mt-4">
                        <thead>
                        <tr>
                            <th width="20%">Position</th>
                            <th width="20%">City</th>
                            <th width="20%">Country</th>
                        </tr>
                        </thead>
                        <tbody>
                        {positionList}
                        </tbody>
                    </Table>
                </Container>

                {/*<CustomizedTables/>*/}

            </div>
        );
    }
}

export default PositionList;