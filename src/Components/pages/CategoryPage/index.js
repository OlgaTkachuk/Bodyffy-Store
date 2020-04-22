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
        // await this.props.getCategoryProductsList(category);
    }
    render() {
        return (
            <div>
                <Header/>
                <NavLinks/>
                <PageCategories cat_title={"Медичні товари"}/>
                <ItemsCollection/>
                <Footer/>
            </div>
        );
    }
}

export default CategoryPage;