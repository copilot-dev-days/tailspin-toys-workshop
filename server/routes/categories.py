from flask import Blueprint, jsonify
from models import db, Category

categories_bp = Blueprint('categories', __name__, url_prefix='/api/categories')

@categories_bp.route('/', methods=['GET'])
def get_categories():
    """Get all categories"""
    try:
        categories = db.session.query(Category).all()
        return jsonify([get_category_json(c) for c in categories])
    except Exception as e:
        return jsonify({'error': 'Failed to fetch categories'}), 500

@categories_bp.route('/<int:id>', methods=['GET'])
def get_category(id: int):
    """Get a single category by ID"""
    try:
        category = db.session.query(Category).filter(Category.id == id).one_or_none()
        if category:
            return jsonify(get_category_json(category))
        else:
            return jsonify({'error': 'Category not found'}), 404
    except Exception as e:
        return jsonify({'error': 'Failed to fetch category'}), 500

def get_category_json(category: Category) -> dict:
    """Convert a Category object to a JSON serializable dictionary"""
    return {
        'id': category.id,
        'name': category.name,
        'description': category.description
    }
