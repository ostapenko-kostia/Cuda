const categories_list = document.getElementById('portfolio__categories');

const category_all = document.querySelector('#portfolio__wrapper_all');
const category_web = document.querySelector('#portfolio__wrapper_web');
const category_apps = document.querySelector('#portfolio__wrapper_apps');
const category_icons = document.querySelector('#portfolio__wrapper_icons');

function removeModificator() {
    categories_list.children.item(0).classList.remove('pci-active');
    categories_list.children.item(1).classList.remove('pci-active');
    categories_list.children.item(2).classList.remove('pci-active');
    categories_list.children.item(3).classList.remove('pci-active');
}

function changeCategory(category) {
    removeModificator()
    category.parentNode.classList.add('pci-active')

    switch(category.name) {
		case "All":
			category_all.style.display = "flex";
            category_web.style.display = "none";
            category_apps.style.display = "none";
            category_icons.style.display = "none";
			break;
		case "Web":
			category_all.style.display = "none";
            category_web.style.display = "flex";
            category_apps.style.display = "none";
            category_icons.style.display = "none";
			break;
		case "Apps":
			category_all.style.display = "none";
            category_web.style.display = "none";
            category_apps.style.display = "flex";
            category_icons.style.display = "none";
			break;
        case "Icons":
			category_all.style.display = "none";
            category_web.style.display = "none";
            category_apps.style.display = "none";
            category_icons.style.display = "flex";
			break;
	}
}