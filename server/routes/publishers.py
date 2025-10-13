from flask import Blueprint, jsonify
from models import db, Publisher

publishers_bp = Blueprint('publishers', __name__, url_prefix='/api/publishers')

@publishers_bp.route('/', methods=['GET'])
def get_publishers():
    """Get all publishers"""
    try:
        publishers = db.session.query(Publisher).all()
        return jsonify([get_publisher_json(p) for p in publishers])
    except Exception as e:
        return jsonify({'error': 'Failed to fetch publishers'}), 500

@publishers_bp.route('/<int:id>', methods=['GET'])
def get_publisher(id: int):
    """Get a single publisher by ID"""
    try:
        publisher = db.session.query(Publisher).filter(Publisher.id == id).one_or_none()
        if publisher:
            return jsonify(get_publisher_json(publisher))
        else:
            return jsonify({'error': 'Publisher not found'}), 404
    except Exception as e:
        return jsonify({'error': 'Failed to fetch publisher'}), 500

def get_publisher_json(publisher: Publisher) -> dict:
    """Convert a Publisher object to a JSON serializable dictionary"""
    return {
        'id': publisher.id,
        'name': publisher.name,
        'description': publisher.description
    }