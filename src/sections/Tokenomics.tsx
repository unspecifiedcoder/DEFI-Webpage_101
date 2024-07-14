import React from 'react';
import { ResponsivePie } from '@nivo/pie';
import { ResponsiveBar } from '@nivo/bar';

const data = [
    { id: 'Protocol Treasury', label: 'Protocol Treasury', value: 100 },
    { id: 'Community Rewards', label: 'Community Rewards', value: 150 },
    { id: 'Team and Advisors', label: 'Team and Advisors', value: 150 },
    { id: 'Private Sale', label: 'Private Sale', value: 200 },
    { id: 'Public Sale', label: 'Public Sale', value: 300 },
    { id: 'Liquidity Provision', label: 'Liquidity Provision', value: 100 },
];

const Tokenomics: React.FC = () => {
    return (
        <section id="tokenomics" className="w-full flex flex-col items-center py-12">
            <h2 className="text-4xl font-redzone mb-8">Tokenomics</h2>
            <div className="w-full flex flex-col md:flex-row justify-around items-center gap-8">
                <div className="w-full md:w-1/2 h-96">
                    <ResponsivePie
                        data={data}
                        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                        innerRadius={0.5}
                        padAngle={0.7}
                        cornerRadius={3}
                        colors={{ scheme: 'nivo' }}
                        borderWidth={1}
                        borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
                        arcLabelsSkipAngle={10}  // Correct property
                        arcLabelsTextColor="#ffffff"  // Set arc labels text color to white
                        
                        
                     // Set slice labels text color to white
                        tooltip={({ datum }) => (
                            <div
                                style={{
                                    padding: 12,
                                    color: '#333',
                                    background: '#fff',
                                    border: '1px solid #ccc',
                                }}
                            >
                                <strong>{datum.id}</strong>
                                <br />
                                {datum.value}M OZN
                            </div>
                        )}
                    />
                </div>
                <div className="w-full md:w-1/2 h-96">
                    <ResponsiveBar
                        data={data}
                        keys={['value']}
                        indexBy="id"
                        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                        padding={0.3}
                        colors={{ scheme: 'nivo' }}
                        borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                        axisTop={null}
                        axisRight={null}
                        axisBottom={{
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: 'Category',
                            legendPosition: 'middle',
                            legendOffset: 32,
                        }}
                        axisLeft={{
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: 'Value',
                            legendPosition: 'middle',
                            legendOffset: -40,
                        }}
                        tooltip={({ id, value, color }) => (
                            <div
                                style={{
                                    padding: 12,
                                    color,
                                    background: '#fff',
                                    border: '1px solid #ccc',
                                }}
                            >
                                <strong>{id}</strong>
                                <br />
                                {value}M OZN
                            </div>
                        )}
                    />
                </div>
            </div>
            <div className="mt-8 text-center">
                <h3 className="text-2xl font-bold">
                    Total Supply: 1,000,000,000 OZN (1 billion INITIAL Supply)
                </h3>
                <p className="text-app_gray text-lg mt-4">
                    Distribution of 1 billion dollars
                </p>
            </div>
        </section>
    );
};

export default Tokenomics;
