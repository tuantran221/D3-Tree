import React from "react";
import Tree from "react-d3-tree";

const data = {
    name: 'Root',
    children: [
      {
        name: 'Pillar 1',
        free: true,
        description: 'Interactive authoring tools',
        children: [
          {
            name: 'Risk SubType 1',
            description:
              "Web-based 'cloud' applications for authoring data visualisations",
            free: true,
            children: [
              {
                name: 'Risk SubType a',
                description:
                  'An open-source platform for publishing charts on the web. Cloud-based or self-hosted.',
                url: 'https://datawrapper.de/',
                free: true,
              },
              {
                name: 'Risk SubType b',
                description: 'Spreadsheet in the cloud with charting',
                free: true,
              },
              {
                name: 'Risk SubType c',
                description:
                  'Cloud-based interactive tool for creating data visualisations',
                url: 'https://plot.ly/',
                free: true,
              },
              {
                name: 'Risk SubType c',
                description:
                  'Open-source interactive tool for creating and exporting D3-like charts',
                url: 'http://raw.densitydesign.org/',
                free: true,
              },
            ],
          },
          {
            name: 'Risk SubType 2',
            children: [
              {
                name: 'Risk SubType a',
                description: 'Powerful tool for data analytics and visualisation',
                url: 'http://www.tableausoftware.com/products/desktop',
              },
              {
                name: 'Risk SubType b',
                description:
                  'Free version of Tableau Desktop where charts are public',
                url: 'http://www.tableausoftware.com/products/public',
                free: true,
              },
              {
                name: 'Risk SubType b',
                description:
                  'Free version of Tableau Desktop where charts are public',
                url: 'http://www.tableausoftware.com/products/public',
                free: true,
              },
              {
                name: 'Risk SubType b',
                description:
                  'Free version of Tableau Desktop where charts are public',
                url: 'http://www.tableausoftware.com/products/public',
                free: true,
              },
              {
                name: 'Risk SubType b',
                description:
                  'Free version of Tableau Desktop where charts are public',
                url: 'http://www.tableausoftware.com/products/public',
                free: true,
              },
              {
                name: 'Risk SubType b',
                description:
                  'Free version of Tableau Desktop where charts are public',
                url: 'http://www.tableausoftware.com/products/public',
                free: true,
              },
            ],
          },
          {
            name: 'Risk SubType 1',
            description:
              "Web-based 'cloud' applications for authoring data visualisations",
            free: true,
            children: [
              {
                name: 'Risk SubType a',
                description:
                  'An open-source platform for publishing charts on the web. Cloud-based or self-hosted.',
                url: 'https://datawrapper.de/',
                free: true,
              },
              {
                name: 'Risk SubType b',
                description: 'Spreadsheet in the cloud with charting',
                free: true,
              },
              {
                name: 'Risk SubType c',
                description:
                  'Cloud-based interactive tool for creating data visualisations',
                url: 'https://plot.ly/',
                free: true,
              },
              {
                name: 'Risk SubType c',
                description:
                  'Open-source interactive tool for creating and exporting D3-like charts',
                url: 'http://raw.densitydesign.org/',
                free: true,
              },
            ],
          },
          {
            name: 'Risk SubType 1',
            description:
              "Web-based 'cloud' applications for authoring data visualisations",
            free: true,
            children: [
              {
                name: 'Risk SubType a',
                description:
                  'An open-source platform for publishing charts on the web. Cloud-based or self-hosted.',
                url: 'https://datawrapper.de/',
                free: true,
              },
              {
                name: 'Risk SubType b',
                description: 'Spreadsheet in the cloud with charting',
                free: true,
              },
              {
                name: 'Risk SubType c',
                description:
                  'Cloud-based interactive tool for creating data visualisations',
                url: 'https://plot.ly/',
                free: true,
              },
              {
                name: 'Risk SubType c',
                description:
                  'Open-source interactive tool for creating and exporting D3-like charts',
                url: 'http://raw.densitydesign.org/',
                free: true,
              },
            ],
          },
          {
            name: 'Risk SubType 1',
            description:
              "Web-based 'cloud' applications for authoring data visualisations",
            free: true,
            children: [
              {
                name: 'Risk SubType a',
                description:
                  'An open-source platform for publishing charts on the web. Cloud-based or self-hosted.',
                url: 'https://datawrapper.de/',
                free: true,
              },
              {
                name: 'Risk SubType b',
                description: 'Spreadsheet in the cloud with charting',
                free: true,
              },
              {
                name: 'Risk SubType c',
                description:
                  'Cloud-based interactive tool for creating data visualisations',
                url: 'https://plot.ly/',
                free: true,
              },
              {
                name: 'Risk SubType c',
                description:
                  'Open-source interactive tool for creating and exporting D3-like charts',
                url: 'http://raw.densitydesign.org/',
                free: true,
              },
            ],
          },
          {
            name: 'Risk SubType 1',
            description:
              "Web-based 'cloud' applications for authoring data visualisations",
            free: true,
            children: [
              {
                name: 'Risk SubType a',
                description:
                  'An open-source platform for publishing charts on the web. Cloud-based or self-hosted.',
                url: 'https://datawrapper.de/',
                free: true,
              },
              {
                name: 'Risk SubType b',
                description: 'Spreadsheet in the cloud with charting',
                free: true,
              },
              {
                name: 'Risk SubType c',
                description:
                  'Cloud-based interactive tool for creating data visualisations',
                url: 'https://plot.ly/',
                free: true,
              },
              {
                name: 'Risk SubType c',
                description:
                  'Open-source interactive tool for creating and exporting D3-like charts',
                url: 'http://raw.densitydesign.org/',
                free: true,
              },
            ],
          },
          {
            name: 'Risk SubType 1',
            description:
              "Web-based 'cloud' applications for authoring data visualisations",
            free: true,
            children: [
              {
                name: 'Risk SubType a',
                description:
                  'An open-source platform for publishing charts on the web. Cloud-based or self-hosted.',
                url: 'https://datawrapper.de/',
                free: true,
              },
              {
                name: 'Risk SubType b',
                description: 'Spreadsheet in the cloud with charting',
                free: true,
              },
              {
                name: 'Risk SubType c',
                description:
                  'Cloud-based interactive tool for creating data visualisations',
                url: 'https://plot.ly/',
                free: true,
              },
              {
                name: 'Risk SubType c',
                description:
                  'Open-source interactive tool for creating and exporting D3-like charts',
                url: 'http://raw.densitydesign.org/',
                free: true,
              },
            ],
          },
        ],
      },
      {
        name: 'Pillar 2',
        description: 'Code-based data visualisation creation',
        free: true,
        children: [
          {
            name: 'Risk Type 1',
            description:
              'The language behind most (all?) browser-based data visualisations',
            free: true,
            children: [
              {
                name: 'Risk SubType 1',
                description:
                  'Off-the-shelf pre-designed charts. Easy to use but less flexible.',
                free: true,
                children: [
                  {
                    name: 'Risk SubType a',
                    description:
                      'A good selection of charts including bar, line, scatter, geo, pie, donut, org etc.',
                    url: 'https://developers.google.com/chart/',
                    free: true,
                  },
                  {
                    name: 'Risk SubType b',
                    description:
                      'A well maintained commercial library of commonly used chart types',
                    url: 'https://www.highcharts.com/',
                  },
                  {
                    name: 'Risk SubType c',
                    description:
                      'A lovely selection of charts including bar, pie, sunburst, icicle, network, trees etc.',
                    url: 'https://philogb.github.io/jit/',
                    free: true,
                  },
                  {
                    name: 'Risk SubType d',
                    description: 'Libraries for visualising geographic data',
                    free: true,
                    children: [
                      {
                        name: 'Risk SubType e',
                        description:
                          'Lovely vector based mapping library with good browser support',
                        url: 'http://kartograph.org/',
                        free: true,
                      },
                      {
                        name: 'Risk SubType f',
                        description: 'Tile-based mapping library',
                        url: 'http://leafletjs.com/',
                        free: true,
                      },
                    ],
                  },
                  {
                    name: 'Risk SubType g',
                    description:
                      'Beautiful line, scatter and histogram charts built on top of D3',
                    url: 'http://metricsgraphicsjs.org/',
                    free: true,
                  },
                  {
                    name: 'Risk SubType h',
                    description:
                      'A general purpose charting library built on top of D3',
                    url: 'http://nvd3.org/',
                    free: true,
                  },
                  {
                    name: 'Risk SubType i',
                    description: 'Library for visualising networks',
                    url: 'http://sigmajs.org/',
                    free: true,
                  },
                ],
              },
              {
                name: 'Risk SubType 2',
                description:
                  'For maximum flexibility, custom coding is the way to go. These libraries will lend a hand.',
                free: true,
                children: [
                  {
                    name: 'Risk SubType a',
                    description:
                      'The jewel in the crown of web-based data visualisation. A library packed full of components for building any data visualisation you can imagine.',
                    url: 'https://d3js.org/',
                    free: true,
                  },
                  {
                    name: 'Risk SubType b',
                    description:
                      'Relatively new, Ractive helps you make your HTML and SVG interactive',
                    url: 'http://www.ractivejs.org/',
                    free: true,
                  },
                  {
                    name: 'Risk SubType c',
                    description:
                      'A general purpose drawing library with good browser support',
                    url: 'http://raphaeljs.com/',
                    free: true,
                  },
                  {
                    name: 'Risk SubType d',
                    description:
                      'A modern version of Raphaël that supports modern browsers',
                    url: 'http://snapsvg.io/',
                    free: true,
                  },
                  {
                    name: 'Risk SubType e',
                    description:
                      'A declarative, mark-up based data visualisation library',
                    url: 'https://variancecharts.com/',
                  },
                  {
                    name: 'Risk SubType f',
                    description:
                      'A declarative language for specifying data visualistions',
                    url: 'https://trifacta.github.io/vega/',
                    free: true,
                  },
                ],
              },
            ],
          },
          {
            name: 'Risk SubType 4',
            description:
              'Non-JavaScript languages for producing web-based data visualisations',
            free: true,
            children: [
              {
                name: 'Risk SubType a',
                description:
                  "Python's a very popular language in data science and is a pleasant language to learn and use",
                free: true,
                children: [
                  {
                    name: 'Risk SubType b',
                    description:
                      'A powerful tool for producing interactive plots, dashboards and data applications',
                    url: 'https://bokeh.pydata.org/',
                    free: true,
                  },
                ],
              },
              {
                name: 'Risk SubType c',
                description: 'Very popular language for data science',
                free: true,
                children: [
                  {
                    name: 'Risk SubType d',
                    description:
                      'A platform for producing web applications using R',
                    url: 'http://shiny.rstudio.com/',
                    free: true,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  }

const containerStyles = {
  width: '1400px',
  marginTop:"-300px",
  height: '100vh',
  marginLeft:"-200px"

}

export default class D3 extends React.PureComponent {
  state = {}

  componentDidMount() {
    const dimensions = this.treeContainer.getBoundingClientRect();
    this.setState({
      translate: {
        x: dimensions.width / 2,
        y: dimensions.height / 2
      }
    });
  }

  render() {
    return (
      <div style={containerStyles} ref={tc => (this.treeContainer = tc)}>
        <Tree 
          data={data} 
          translate={this.state.translate} 
          orientation={'vertical'}
          rootNodeClassName="node__root"
          branchNodeClassName="node__branch"
          bgColorRangeLow={"#000"} bgColorRangeHigh={"#fff"}
            
          leafNodeClassName="node__leaf"
        />
      </div>
    );
  }
}
