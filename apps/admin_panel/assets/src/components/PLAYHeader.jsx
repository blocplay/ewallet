import React from 'react';
import { localize } from 'react-localize-redux';
import { Button, Glyphicon, Dropdown, MenuItem } from 'react-bootstrap';
import PropTypes from 'prop-types';
import PLAYSearchField from './PLAYSearchField';

const PLAYHeader = ({
  translate, query, handleAdd, handleSearchChange, headerText, visible,
}) => (
  <div className="search-header">
    <div className="row mb-3">
      <div className="col-md-6">
        <h1 className="search-header__title pull-left">
          {translate(headerText.title)}
        </h1>
      </div>
      <div className={`col-md-6 ${visible.addBtn ? '' : 'play-hide'}`}>
        <Button
          bsClass="search-header__new_button btn btn-play-blue pull-right"
          bsStyle="primary"
          onClick={handleAdd}
        >
          <Glyphicon glyph="plus" />
          {headerText.add && translate(headerText.add)}
        </Button>
      </div>
    </div>
    <div className="row mb-1">
      <div className="col-xs-4">
        <PLAYSearchField handleSearchChange={handleSearchChange} query={query} />
      </div>
      <div className="col-md-3 play-hide">
        <Button bsClass="search-header__adv_filter_btn btn" bsStyle="link">
          {translate(headerText.advancedFilters)}
        </Button>
      </div>
      <div className="col-md-6 play-hide">
        <Dropdown
          className="search-header__dropdown-export pull-right"
          id="search-header__dropdown-export"
        >
          <Dropdown.Toggle className="search-header__dropdown-toggle">
            <Glyphicon glyph="share" />
            {translate(headerText.export)}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <MenuItem eventKey="1">
              CSV
            </MenuItem>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  </div>
);

PLAYHeader.propTypes = {
  handleAdd: PropTypes.func,
  handleSearchChange: PropTypes.func.isRequired,
  headerText: PropTypes.shape({
    title: PropTypes.string,
    advancedFilters: PropTypes.string,
    export: PropTypes.string,
    add: PropTypes.string,
  }),
  query: PropTypes.string.isRequired,
  translate: PropTypes.func.isRequired,
  visible: PropTypes.shape({
    addBtn: PropTypes.bool,
  }),
};

PLAYHeader.defaultProps = {
  handleAdd: () => { },
  headerText: {
    title: '',
    advancedFilters: '',
    export: '',
    add: '',
  },
  visible: {
    addBtn: true,
  },
};

export default localize(PLAYHeader, 'locale');
