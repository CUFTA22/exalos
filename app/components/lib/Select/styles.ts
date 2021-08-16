// $color-primary: hsl(206, 88%, 77%);
// $color-alpha: hsla(206, 88%, 77%, 0.6);

export const customStyles = {
  color: {
    border: '',
    primary: 'hsl(206, 88%, 77%)',
    danger: '',
    disabled: '',
    iconSeparator: '',
  },
  select: {
    css: 'color: #000;',
  },
  loader: {
    size: '',
    color: '',
  },
  control: {
    boxShadowColor: 'none',
    borderWidth: '',
    borderStyle: '',
    borderRadius: '6px',
    focusedBorderColor: 'rgba(85, 85, 85, 0.75)',
    css: `width: 140px;
          min-height: 34px;
          position: relative;
          cursor: pointer; 
          border: 1px solid hsla(206, 88%, 77%, 0.3);
          color: hsl(206, 88%, 77%);
          font-size: 13px;
          box-shadow: hsla(206, 88%, 77%, 0.1) 0px 0px 2px 4.5px;

          :after {
            content: "";
            width: 148px;
            min-height: 44px;
            border-radius: 10px;
            border: 1px solid transparent;
            border-top-color: hsl(206, 88%, 77%);
            border-bottom-color: hsl(206, 88%, 77%);
                
            position: absolute;
            z-index: 10;
            top: -6px;
            left: -5px;
          }
          `,
  },
  icon: {
    color: '#A6A6A6',
  },
  menu: {
    backgroundColor: 'hsla(206, 88%, 77%, 0.1)',
    css: `
          margin: 1rem 0;
          cursor: pointer;
          border-top: 1px solid hsl(206, 88%, 77%); 
          border-bottom: 1px solid hsl(206, 88%, 77%);
          color: hsla(206, 88%, 77%, 0.8);
          font-size: 14px;
    `,
    option: {
      padding: '7px',
      selectedColor: 'hsl(206, 88%, 77%)',
      selectedBgColor: 'hsla(206, 88%, 77%, 0.15)',
      focusedBgColor: 'hsla(206, 88%, 77%, 0.05)',
      // textAlign: 'center',
    },
  },
};
