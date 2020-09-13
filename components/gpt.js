const AD_UNIT_PATH = '/9528481/HALFPAGE_IFOOD.IT';

class Banner extends React.Component {
    componentDidMount() {
        googletag.cmd.push(function() {
            googletag.defineSlot(AD_UNIT_PATH, [300, 250], 'div-1').addService(googletag.pubads());
            googletag.pubads().enableSingleRequest();
            googletag.enableServices();
        });
        googletag.cmd.push(function() { googletag.display('div-1'); });
    }

    render() {
        return (
            <div id="banner">
		<div id="div-1" style={{ height: '300px', width: '250px' }} />
            </div>
        );
    }
}

export default Banner;