import React, {Component} from 'react';
import Header from "../../basic/Header";
import Footer from "../../basic/Footer";
import NavLinks from "../../basic/NavLinks";
import ItemsCollection from "../../basic/ItemsCollection";
import PageCategories from "../../basic/PageCategories";

class CategoryPage extends Component {
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
        console.log(this.props.getCategoryProductsList + 'PROPS');
        await this.props.getCategoryProductsList();
    }

    render() {
        const {category_photos, category_slugs, category_collections, error, isFetching, category_title, collections_photos} = this.props.categoryInfo;
        return (
            <div>
                <Header/>
                <NavLinks/>
                <PageCategories cat_title={category_title} error={error} isFetching={isFetching}
                                photos={collections_photos.flat()} collections={category_collections}/>
                <ItemsCollection photos={category_photos.flat()} category_slugs={category_slugs} error={error}
                                 isFetching={isFetching}/>
                <Footer/>
            </div>
        );
    }
}

export default CategoryPage;