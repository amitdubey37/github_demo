import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import SearchBar from "../../Components/SearchBar";
import ExpandableRow from "../../Components/ExpandableRow";
import {fetchRepositories, fetchPRs, fetchFiles} from "./APIs/action";

class GitHubSearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedUserName: '',
            activeIndex: null
        }
    }
    fetchRepos = (userName) => {
        const {fetchRepositories} = this.props;
        fetchRepositories(userName);
        this.setState({selectedUserName: userName})
    }
    onExpand = (type, index, args) => {
        const { github } = this.props;
        if (type === 'repo') {
            this.props.fetchPRs(github.userName, args.name, index)
        }
        else {
            this.props.fetchFiles(github.userName, github.selectedRepo, args.number )
        }
    }


    render() {
        const { github } = this.props;
        const expandableRows = [
            {
                type: 'repo',
                items: github.repositories,
                activeIndex: github.active_repo,
                onClick: this.onExpand,
                titleKey: 'name',
                params: ['name']
            },
            {
                type: 'PR',
                items: github.PRs,
                activeIndex: github.active_PR,
                onClick: this.onExpand,
                nested: true,
                titleKey: 'title',
                params: ['number']
            },
            {
                activeIndex: github.active_repo,
                items: github.files,
                type: 'file',
                titleKey: 'filename',
                nested: true
            },
        ]
        return (
            <>
                <SearchBar onClick={this.fetchRepos}/>
                <ExpandableRow rows={expandableRows} github={github} {...expandableRows[0]} />
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    repositories: state.github.repositories,
    github: state.github,
});

function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators({
            fetchRepositories,
            fetchPRs,
            fetchFiles
        }, dispatch),
    };
}


export default (connect(mapStateToProps, mapDispatchToProps)(GitHubSearchBar));
