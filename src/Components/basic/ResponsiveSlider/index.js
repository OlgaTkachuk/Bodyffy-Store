import React from 'react';
import InfiniteCarousel from 'react-leaf-carousel';

const ResponsiveSlider = (props) => {
    const photos = props.photos
    let array=[1,2,3,4,5,6,7,8]
    console.log(photos);
    return (
        <div className={"responsive-slider-container"}>
            <InfiniteCarousel
                breakpoints={[
                    {
                        breakpoint: 500,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        },
                    },
                    {
                        breakpoint: 769,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                        },
                    },
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                        },
                    },
                ]}
                dots={false}
                showSides={true}
                sidesOpacity={0}
                sideSize={.1}
                slidesToScroll={1}
                slidesToShow={3}
                scrollOnDevice={true}>
                {/*{photos.map((item) => {*/}
                    {/*return(*/}
                    {/*<div>*/}
                        {/*<img className={'resp-slider_img'} src={item} alt=""/>*/}
                    {/*</div>*/}
                {/*)})}*/}

                <div>
                    <img className='resp-slider_img' alt=''
                         src='https://images.unsplash.com/photo-1586809745197-34e002757605?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'/>
                </div>
                <div>
                    <img className='resp-slider_img' alt=''
                         src='https://images.unsplash.com/photo-1586799830978-7949c38abc81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80'/>
                </div>
                <div>
                    <img className='resp-slider_img' alt=''
                         src='https://images.unsplash.com/photo-1558980663-3685c1d673c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'/>
                </div>
                <div>
                    <img className='resp-slider_img' alt=''
                         src='https://images.unsplash.com/photo-1562887085-d0aa7ff20b95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80'/>
                </div>
                <div>
                    <img className='resp-slider_img' alt=''
                         src='https://images.unsplash.com/photo-1586763209828-f0fa0773f19e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80'/>
                </div>
                <div>
                    <img className='resp-slider_img' alt=''
                         src='https://images.unsplash.com/photo-1586715055143-8cb4408b1e1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'/>
                </div>
                <div>
                    <img className='resp-slider_img' alt=''
                         src='https://images.unsplash.com/photo-1558981822-0c0c5b070026?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'/>
                </div>
                <div>
                    <img className='resp-slider_img' alt=''
                         src='https://images.unsplash.com/photo-1586730113406-8f3819ab0c38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'/>
                </div>
            </InfiniteCarousel>
        </div>
    );
};

export default ResponsiveSlider;


