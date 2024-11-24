import React from 'react';

const CopyrightBar = () => {
      return (
            <div className="flex items-center justify-center py-2 bg-[#171C2B] border-t-[1px] border-[#ffffff32]">
                  <small>
                        © Copyright {new Date().getFullYear()} Bright Future Soft. All rights reserved.
                  </small>
            </div>
      );
};

export default CopyrightBar;
