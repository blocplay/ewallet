import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PLAYCircleButton from './PLAYCircleButton';
import placeholder from '../../public/images/user_icon_placeholder.png';

const defaultProps = {
  img: placeholder,
  showUploadBtn: true,
  showCloseBtn: false,
};

const propTypes = {
  img: PropTypes.string,
  onFileChanged: PropTypes.func.isRequired,
  showCloseBtn: PropTypes.bool,
  showUploadBtn: PropTypes.bool,
};

class PLAYPhotoPreviewer extends Component {
  static handleBrowseImg() {
    document.getElementById('file-input').click();
  }

  constructor(props) {
    super(props);
    const { img, showCloseBtn, showUploadBtn } = this.props;
    this.accept = 'image/jpeg, image/png, image/jpg, image/gif';
    this.state = {
      file: null,
      img,
      showUploadBtn,
      showCloseBtn,
      imgClass: 'play_photo_uploader__img',
    };
    this.handleChangeImg = this.handleChangeImg.bind(this);
    this.handleRemoveImg = this.handleRemoveImg.bind(this);
    this.handleDragEnter = this.handleDragEnter.bind(this);
    this.handleDragLeave = this.handleDragLeave.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
    this.readFile = this.readFile.bind(this);
    this.shouldImageBeUploaded = this.shouldImageBeUploaded.bind(this);
  }

  handleDrop(e) {
    e.preventDefault(); // prevent to open a new tab with the file.
    this.setState({
      imgClass: 'play_photo_uploader__img',
    });
    const file = e.dataTransfer.files[0];
    if (this.accept.indexOf(file.type) === -1) return;
    this.readFile(file);
  }

  handleDragEnter() {
    this.setState({
      showUploadBtn: false,
      imgClass: 'play_photo_uploader__img-blue',
    });
  }

  handleDragLeave() {
    this.setState(prevState => ({
      showUploadBtn: !prevState.showCloseBtn,
      imgClass: 'play_photo_uploader__img',
    }));
  }


  handleChangeImg(e) {
    const file = e.target.files[0];
    this.readFile(file);
  }

  readFile(file) {
    const reader = new FileReader();
    const { onFileChanged } = this.props;
    reader.onloadend = () => {
      this.setState(
        {
          file,
          img: reader.result,
          showUploadBtn: false,
          showCloseBtn: true,
        },
        () => onFileChanged(file),
      );
    };

    reader.readAsDataURL(file);
  }

  handleRemoveImg() {
    const { onFileChanged } = this.props;
    document.getElementById('file-input').value = null;
    this.setState(
      {
        file: null,
        img: placeholder,
        showUploadBtn: true,
        showCloseBtn: false,
      },
      () => onFileChanged(null),
    );
  }

  shouldImageBeUploaded() {
    const { file, img } = this.state;
    const add = !img && file !== null;
    const update = img && img !== placeholder && file !== null;
    const remove = !file && img === placeholder;
    return add || update || remove;
  }

  render() {
    const {
      img, imgClass, showUploadBtn, showCloseBtn,
    } = this.state;

    return (
      <div
        className="play_photo_uploader"
        id="container"
        onDragEnter={this.handleDragEnter}
        onDragLeave={this.handleDragLeave}
        onDragOver={e => e.preventDefault()}
        onDrop={this.handleDrop}
      >
        <img alt="placeholder" className={imgClass} src={img} />
        <PLAYCircleButton
          className="play_photo_uploader__top-right-button"
          faName="close"
          onClick={this.handleRemoveImg}
          show={showCloseBtn}
          size="small"
        />
        <PLAYCircleButton
          className="play_photo_uploader__center-button"
          faName="camera"
          onClick={PLAYPhotoPreviewer.handleBrowseImg}
          show={showUploadBtn}
          size="medium"
        />
        <input
          accept={this.accept}
          id="file-input"
          onChange={this.handleChangeImg}
          style={{ display: 'none' }}
          type="file"
        />
      </div>
    );
  }
}

PLAYPhotoPreviewer.defaultProps = defaultProps;
PLAYPhotoPreviewer.propTypes = propTypes;

export default PLAYPhotoPreviewer;
