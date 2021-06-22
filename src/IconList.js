import * as React from 'react';
import { IIconProps, initializeIcons } from '@fluentui/react';
import { Stack, IStackStyles, IStackTokens, IStackItemStyles } from '@fluentui/react/lib/Stack';
import { DefaultButton } from '@fluentui/react/lib/Button';
import { useBoolean } from '@fluentui/react-hooks';

initializeIcons();

const stackTokens: IStackTokens = { childrenGap: 20 };

const volume0Icon: IIconProps = { iconName: 'Volume0' };
const volume3Icon: IIconProps = { iconName: 'Volume3' };

const IconList  = () => {
  const [muted, { toggle: setMuted }] = useBoolean(false);

  return (
    <Stack horizontal tokens={stackTokens}>
      <DefaultButton
      toggle
      checked={muted}
      text={muted ? 'Volume muted' : 'Volume unmuted'}
      iconProps={muted ? volume0Icon : volume3Icon}
      onClick={setMuted}
      />  
      <DefaultButton 
        text="Standard" 
        onClick={_alertClicked} 
      /> 
     </Stack>
  );
};

function _alertClicked(): void {
  alert('Clicked');
}

export default IconList;