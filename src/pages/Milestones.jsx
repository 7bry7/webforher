<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>For Her - Milestones</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Header -->
    <div class="header">
        <div class="brand">
            <div class="heart-icon">❤️</div>
            FOR HER
        </div>
        <div class="search-bar">
            <input type="text" class="search-input" placeholder="Search...">
        </div>
        <div class="header-icons">  
            <button class="icon-btn">📧</button>
            <button class="icon-btn">👤</button>
            <button class="icon-btn">⚙️</button>
        </div>
    </div>

    <!-- Sidebar -->
    <div class="sidebar">
        <a href="homepage.html" class="nav-item">MY HOME</a>
        <a href="milestones.html" class="nav-item active">MILESTONES</a>
        <a href="photos.html" class="nav-item">PHOTOS</a>
        <a href="love-notes.html" class="nav-item">LOVE NOTES</a>
        
        <div class="sidebar-bottom">
            <div class="sidebar-icon">ℹ️</div>
            <div class="sidebar-icon">⚙️</div>
        </div>
    </div>

    <!-- Main Content -->
    <div class="main-content">
        <h1 class="page-title">
            LIST OF MILESTONES THAT WE'VE ACHIEVED FOR THE DAYS WE'VE BEEN TOGETHER:
        </h1>
        
        <div class="milestones-container">
            <table class="milestones-table">
                <thead class="table-header">
                    <tr>
                        <th>No.</th>
                        <th>KEY MILESTONES</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="table-row">
                        <td class="milestone-number">1</td>
                        <td class="milestone-text">NILIGAWAN KITAAAAA (NOVEMBER 2023)</td>
                        <td><button class="more-btn" onclick="openModal('milestone1')">More</button></td>
                    </tr>
                    <tr class="table-row">
                        <td class="milestone-number">2</td>
                        <td class="milestone-text">FIRST KISS SA 2 P. Conducto Street</td>
                        <td><button class="more-btn" onclick="openModal('milestone2')">More</button></td>
                    </tr>
                    <tr class="table-row">
                        <td class="milestone-number">3</td>
                        <td class="milestone-text">SINAGOT MO AKOOOO (JANUARY 15, 2024)</td>
                        <td><button class="more-btn" onclick="openModal('milestone3')">More</button></td>
                    </tr>
                    <tr class="table-row">
                        <td class="milestone-number">4</td>
                        <td class="milestone-text">FIRST MONTHSARY (FEBRUARY 15, 2024)</td>
                        <td><button class="more-btn" onclick="openModal('milestone4')">More</button></td>
                    </tr>
                    <tr class="table-row">
                        <td class="milestone-number">5</td>
                        <td class="milestone-text">FIRST ANNIVERSARY (JANUARY 15, 2025)</td>
                        <td><button class="more-btn" onclick="openModal('milestone5')">More</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <!-- Modal -->
    <div class="modal" id="milestoneModal">
        <div class="modal-content">
            <div class="modal-header">
                <div class="modal-icon" id="modalIcon">💕</div>
                <div class="modal-title" id="modalTitle">Milestone Title</div>
                <div class="modal-date" id="modalDate">Date</div>
            </div>
            <div class="modal-message" id="modalMessage">
                Message content will appear here...
            </div>
            <button class="close-btn" onclick="closeModal()">Close</button>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>