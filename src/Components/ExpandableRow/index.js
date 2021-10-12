import React from 'react';
import {connect} from 'react-redux';

import { pick } from 'lodash';


const ExpandableRow = ({type, items, activeIndex, onClick, titleKey, params, nested, selectedPR, selectedRepo, github, rows}) => {
    const onExpand = (clickedIndex, args) => {
        onClick && onClick(type, clickedIndex, args)
    }

    return (
        <div>
            {items && items.map((item, index) => {
                return (
                    <div key={`${type}_${index}`} className={nested ? 'nested': ''}>
                        <h3
                            className="expandable-header"
                            onClick={() => onExpand(index, pick(item, params))}
                        >
                            {item[titleKey]}
                        </h3>
                        {
                            github.selectedRepo && github.selectedRepo === item[titleKey] && (
                            <div>
                                <ExpandableRow github={github} rows={rows} {...rows[1]} nested={true} />
                            </div>
                        )}
                        {github.selectedPR && github.selectedPR === item['number'] && (
                            <div>
                                <ExpandableRow github={github} {...rows[2]} nested={true} />
                            </div>
                        )}
                    </div>
                )
            })
            }
        </div>
    )
}


const mapStateToProps = (state) => ({
    isLoading: state.commonContent.isLoading,
    github: state.github,
});
export default (connect(mapStateToProps)(ExpandableRow));
