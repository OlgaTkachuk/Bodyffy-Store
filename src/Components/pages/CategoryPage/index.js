import React, {Component} from 'react';
import Header from "../../basic/Header";
import Footer from "../../basic/Footer";
import NavLinks from "../../basic/NavLinks";
import ItemsCollection from "../../basic/ItemsCollection";
import PageCategories from "../../basic/PageCategories";
import styles from './CategoryPageStyle.scss'

class CategoryPage extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         activeCollection: 'all',
    //         activePhotos: this.props.categoryInfo.category_photos.flat(),
    //         // activePhotos: this.props.categoryInfo.category_photos.flat(),
    //         activeSlugs: this.props.categoryInfo.category_slugs
    //     }
    // }
    componentDidMount() {
        this.onRender();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.slug !== this.props.match.params.slug) {
            this.onRender(this.props.match.params.slug);
        }
    }

    onRender = async () => {
        const categorySlug = this.props.match.params.slug;
        await this.props.setActiveCategorySlug(categorySlug);
        await this.props.getCategoryProductsList();
    }

    handlePageCollections = (collection) => {
        const collectionSlug  = collection.collection_name;
        this.props.setActiveCollection(collectionSlug);
        this.props.getCollectionProductsList();
    }
    render() {
        const {category_photos, category_slugs, error, isFetching, category_title, collections_photos, collections} = this.props.categoryInfo;
        return (
            <div>
                <Header/>
                <NavLinks/>
                <PageCategories cat_title={category_title} error={error} isFetching={isFetching} onChange={this.handlePageCollections}
                                photos={collections_photos.flat()} collections={collections}  />
                <ItemsCollection photos={category_photos.flat()} category_slugs={category_slugs} error={error}
                                 isFetching={isFetching}/>
                <Footer/>
            </div>
        );
    }
}

export default CategoryPage;