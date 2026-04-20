// admin.js - لوحة تحكم 

// ========== حماية صفحة الأدمن ==========
function checkAdminAuth() {
    const currentUser = localStorage.getItem('currentUser');
    
    if (!currentUser) {
        window.location.href = 'login.html';
        return false;
    }
    
    const user = JSON.parse(currentUser);
    
    if (user.role !== 'admin' && user.email !== 'admin@secretcoder.com') {
        alert('غير مصرح لك بالدخول إلى لوحة التحكم!');
        window.location.href = 'login.html';
        return false;
    }
    
    return true;
}

if (!checkAdminAuth()) {
    throw new Error('Unauthorized');
}

// مفتاح التخزين المحلي
const STORAGE_KEYS = {
    USERS: 'secretcoder_users',
    TEACHERS: 'secretcoder_teachers',
    MESSAGES: 'secretcoder_messages',
    ENROLLMENTS: 'enrolled_courses'
};

// البيانات الافتراضية
const defaultData = {
    users: [
        { id: 1, name: "أحمد محمد", email: "ahmed@example.com", password: "123456", registered: "2025-01-15", role: "طالب", status: "نشط" },
        { id: 2, name: "سارة خالد", email: "sara@example.com", password: "123456", registered: "2025-02-01", role: "طالب", status: "نشط" },
        { id: 3, name: "محمد علي", email: "mohamed@example.com", password: "123456", registered: "2025-03-10", role: "طالب", status: "نشط" }
    ],
    teachers: [
        { id: 1, name: "د. أحمد حسن", email: "ahmed.hassan@secretcoder.com", phone: "01001234567", specialty: "تطوير الويب", qualification: "دكتوراه", experience: "10 سنوات", message: "أريد تدريس كورسات تطوير الويب", appliedDate: "2025-01-20", status: "موافق" },
        { id: 2, name: "م. نورهان سمير", email: "nourhan@secretcoder.com", phone: "01007654321", specialty: "الذكاء الاصطناعي", qualification: "ماجستير", experience: "5 سنوات", message: "لدي خبرة في مجال الذكاء الاصطناعي", appliedDate: "2025-02-15", status: "موافق" },
        { id: 3, name: "أ. محمود رضا", email: "mahmoud@secretcoder.com", phone: "01005556666", specialty: "علوم البيانات", qualification: "بكالوريوس", experience: "3 سنوات", message: "أريد تدريس علوم البيانات", appliedDate: "2025-03-01", status: "قيد المراجعة" }
    ],
    messages: [
        { id: 1, name: "خالد عبدالله", email: "khaled@test.com", subject: "استفسار عن كورس", message: "عندي سؤال عن كورس الجافا", date: "2025-03-20", status: "مقروءة" },
        { id: 2, name: "منى السيد", email: "mona@test.com", subject: "مشكلة تقنية", message: "لا استطيع مشاهدة الفيديو", date: "2025-03-21", status: "غير مقروءة" }
    ],
    enrollments: [
        { id: 1, slug: "html-beginners", title: "كورس HTML للمبتدئين", userEmail: "ahmed@example.com", userName: "أحمد محمد", enrolledDate: "2025-03-15", progress: 45, status: "قيد التقدم" },
        { id: 2, slug: "css-beginners", title: "تطوير الواجهة الأمامية - CSS", userEmail: "sara@example.com", userName: "سارة خالد", enrolledDate: "2025-03-10", progress: 80, status: "قيد التقدم" },
        { id: 3, slug: "javascript-beginners", title: "مقدمة إلى جافا سكريبت", userEmail: "ahmed@example.com", userName: "أحمد محمد", enrolledDate: "2025-03-18", progress: 20, status: "قيد التقدم" },
        { id: 4, slug: "python-beginners", title: "برمجة بايثون", userEmail: "mohamed@example.com", userName: "محمد علي", enrolledDate: "2025-03-05", progress: 100, status: "مكتمل" }
    ]
};

function loadDataFromStorage() {
    let data = {};
    data.users = JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS));
    data.teachers = JSON.parse(localStorage.getItem(STORAGE_KEYS.TEACHERS));
    data.messages = JSON.parse(localStorage.getItem(STORAGE_KEYS.MESSAGES));
    data.enrollments = JSON.parse(localStorage.getItem(STORAGE_KEYS.ENROLLMENTS));
    
    if (!data.users || data.users.length === 0) data.users = defaultData.users;
    if (!data.teachers || data.teachers.length === 0) data.teachers = defaultData.teachers;
    if (!data.messages || data.messages.length === 0) data.messages = defaultData.messages;
    if (!data.enrollments || data.enrollments.length === 0) data.enrollments = defaultData.enrollments;
    
    return data;
}

function saveToStorage(type, data) {
    localStorage.setItem(STORAGE_KEYS[type.toUpperCase()], JSON.stringify(data));
}

let currentData = loadDataFromStorage();
let currentTab = 'dashboard';
let searchTerm = '';
let editId = null;

function updateStats() {
    document.getElementById('statUsers').innerText = currentData.users.length;
    document.getElementById('statTeachers').innerText = currentData.teachers.length;
    document.getElementById('statMessages').innerText = currentData.messages.length;
    document.getElementById('statEnrollments').innerText = currentData.enrollments.length;
}

function renderDashboard() {
    document.getElementById('pageTitle').innerHTML = 'لوحة التحكم';
    document.getElementById('addBtn').style.display = 'none';
    
    const recentUsers = [...currentData.users].slice(-5);
    const recentMessages = [...currentData.messages].slice(-5);
    const recentEnrollments = [...currentData.enrollments].slice(-5);
    
    let html = `
        <div class="row">
            <div class="col-md-4 mb-4">
                <div class="card h-100">
                    <div class="card-header bg-white fw-bold">
                        <i class="fas fa-users" style="color: #fb873f;"></i> 🆕 أحدث المستخدمين
                    </div>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            ${recentUsers.map(u => `<li class="list-group-item d-flex justify-content-between align-items-center">
                                <span><i class="fas fa-user text-primary me-2"></i> ${u.name}</span>
                                <small class="text-muted">${u.email}</small>
                            </li>`).join('')}
                            ${recentUsers.length === 0 ? '<li class="list-group-item text-muted">لا يوجد مستخدمين</li>' : ''}
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-4">
                <div class="card h-100">
                    <div class="card-header bg-white fw-bold">
                        <i class="fas fa-envelope" style="color: #fb873f;"></i> 📩 أحدث الرسائل
                    </div>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            ${recentMessages.map(m => `<li class="list-group-item">
                                <div class="d-flex justify-content-between">
                                    <strong><i class="fas fa-user me-2"></i> ${m.name}</strong>
                                    <small class="text-muted">${m.date}</small>
                                </div>
                                <small class="text-muted">${m.subject}</small>
                            </li>`).join('')}
                            ${recentMessages.length === 0 ? '<li class="list-group-item text-muted">لا توجد رسائل</li>' : ''}
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-4">
                <div class="card h-100">
                    <div class="card-header bg-white fw-bold">
                        <i class="fas fa-graduation-cap" style="color: #fb873f;"></i> 🎓 أحدث التسجيلات
                    </div>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            ${recentEnrollments.map(e => `<li class="list-group-item">
                                <div class="d-flex justify-content-between">
                                    <strong><i class="fas fa-user me-2"></i> ${e.userName}</strong>
                                    <small class="text-muted">${e.enrolledDate}</small>
                                </div>
                                <small class="text-muted">${e.title}</small>
                                <div class="progress mt-2">
                                    <div class="progress-bar" style="width: ${e.progress}%"></div>
                                </div>
                            </li>`).join('')}
                            ${recentEnrollments.length === 0 ? '<li class="list-group-item text-muted">لا توجد تسجيلات</li>' : ''}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="alert alert-success mt-3" style="background: #d1fae5; border: none; color: #065f46;">
            <i class="fas fa-check-circle"></i> مرحباً بك في لوحة تحكم الأدمن! يمكنك من هنا إدارة المستخدمين والمدرسين والرسائل والتسجيلات.
        </div>
    `;
    document.getElementById('tableContent').innerHTML = html;
}

function renderUsersTable() {
    let filtered = currentData.users.filter(user => 
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    let html = `
        <table class="table table-hover">
            <thead>
                <tr>
                    <th>#</th>
                    <th><i class="fas fa-user"></i> الاسم</th>
                    <th><i class="fas fa-envelope"></i> البريد الإلكتروني</th>
                    <th><i class="fas fa-calendar"></i> تاريخ التسجيل</th>
                    <th><i class="fas fa-tag"></i> الدور</th>
                    <th><i class="fas fa-cogs"></i> إجراءات</th>
                </tr>
            </thead>
            <tbody>
                ${filtered.map(user => `
                    <tr>
                        <td>${user.id}</td>
                        <td><strong>${user.name}</strong>${user.isNew ? '<span class="badge bg-danger ms-1">جديد</span>' : ''}</td>
                        <td>${user.email}</td>
                        <td>${user.registered || 'غير محدد'}</td>
                        <td><span class="badge bg-info">${user.role || 'طالب'}</span></td>
                        <td>
                            <button class="edit-btn" onclick="editItem('users', ${user.id})"><i class="fas fa-edit"></i></button>
                            <button class="delete-btn" onclick="deleteItem('users', ${user.id})"><i class="fas fa-trash"></i></button>
                        </td>
                    </tr>
                `).join('')}
                ${filtered.length === 0 ? '<tr><td colspan="6" class="text-center text-muted">لا توجد بيانات</td>' : ''}
            </tbody>
        </table>
    `;
    document.getElementById('tableContent').innerHTML = html;
}

function renderTeachersTable() {
    let filtered = currentData.teachers.filter(teacher => 
        teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        teacher.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    let html = `
        <table class="table table-hover">
            <thead>
                <tr>
                    <th>#</th>
                    <th><i class="fas fa-chalkboard-user"></i> الاسم</th>
                    <th><i class="fas fa-envelope"></i> البريد</th>
                    <th><i class="fas fa-phone"></i> رقم الهاتف</th>
                    <th><i class="fas fa-code"></i> التخصص</th>
                    <th><i class="fas fa-calendar"></i> تاريخ التقديم</th>
                    <th><i class="fas fa-check-circle"></i> الحالة</th>
                    <th><i class="fas fa-cogs"></i> إجراءات</th>
                </tr>
            </thead>
            <tbody>
                ${filtered.map(teacher => `
                    <tr>
                        <td>${teacher.id}</td>
                        <td><strong>${teacher.name}</strong> ${teacher.isNew ? '<span class="badge bg-danger ms-1">جديد</span>' : ''}</td>
                        <td>${teacher.email}</td>
                        <td>${teacher.phone || 'غير مدخل'}</td>
                        <td><span class="badge bg-secondary">${teacher.specialty || 'غير محدد'}</span></td>
                        <td>${teacher.appliedDate || 'غير محدد'}</td>
                        <td>
                            <select class="form-select form-select-sm" style="width: 120px;" onchange="updateTeacherStatus(${teacher.id}, this.value)">
                                <option value="قيد المراجعة" ${teacher.status === 'قيد المراجعة' ? 'selected' : ''}>⏳ قيد المراجعة</option>
                                <option value="موافق" ${teacher.status === 'موافق' ? 'selected' : ''}>✅ موافق</option>
                                <option value="مرفوض" ${teacher.status === 'مرفوض' ? 'selected' : ''}>❌ مرفوض</option>
                            </select>
                        </td>
                        <td>
                            <button class="edit-btn" onclick="viewTeacherDetails(${teacher.id})" title="عرض التفاصيل"><i class="fas fa-eye"></i></button>
                            <button class="delete-btn" onclick="deleteItem('teachers', ${teacher.id})" title="حذف"><i class="fas fa-trash"></i></button>
                        </td>
                    </tr>
                `).join('')}
                ${filtered.length === 0 ? '<tr><td colspan="8" class="text-center text-muted">لا توجد بيانات</td>' : ''}
            </tbody>
        </table>
    `;
    document.getElementById('tableContent').innerHTML = html;
}

function renderMessagesTable() {
    let filtered = currentData.messages.filter(msg => 
        msg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        msg.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        msg.subject.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    let html = `
        <table class="table table-hover">
            <thead>
                <tr>
                    <th>#</th>
                    <th><i class="fas fa-user"></i> المرسل</th>
                    <th><i class="fas fa-envelope"></i> البريد</th>
                    <th><i class="fas fa-tag"></i> الموضوع</th>
                    <th><i class="fas fa-comment"></i> الرسالة</th>
                    <th><i class="fas fa-calendar"></i> التاريخ</th>
                    <th><i class="fas fa-eye"></i> الحالة</th>
                    <th><i class="fas fa-cogs"></i> إجراءات</th>
                </tr>
            </thead>
            <tbody>
                ${filtered.map(msg => `
                    <tr>
                        <td>${msg.id}</td>
                        <td><strong>${msg.name}</strong> ${msg.isNew ? '<span class="badge bg-danger ms-1">جديد</span>' : ''}</td>
                        <td>${msg.email}</td>
                        <td>${msg.subject}</td>
                        <td><small>${msg.message ? msg.message.substring(0, 50) : ''}...</small></td>
                        <td>${msg.date}</td>
                        <td><span class="badge ${msg.status === 'مقروءة' ? 'bg-secondary' : 'bg-danger'}">${msg.status || 'غير مقروءة'}</span></td>
                        <td>
                            <button class="edit-btn" onclick="editItem('messages', ${msg.id})"><i class="fas fa-eye"></i></button>
                            <button class="delete-btn" onclick="deleteItem('messages', ${msg.id})"><i class="fas fa-trash"></i></button>
                        </td>
                    </tr>
                `).join('')}
                ${filtered.length === 0 ? '<tr><td colspan="8" class="text-center text-muted">لا توجد بيانات</td>' : ''}
            </tbody>
        </table>
    `;
    document.getElementById('tableContent').innerHTML = html;
}

// ========== دالة عرض المسجلين في الكورسات ==========
function renderEnrollmentsTable() {
    let filtered = currentData.enrollments.filter(enrollment => 
        enrollment.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        enrollment.userEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
        enrollment.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    // إحصائيات سريعة
    const completedCount = currentData.enrollments.filter(e => e.progress === 100).length;
    const inProgressCount = currentData.enrollments.filter(e => e.progress > 0 && e.progress < 100).length;
    const notStartedCount = currentData.enrollments.filter(e => e.progress === 0).length;
    
    let html = `
        <div class="row mb-4">
            <div class="col-md-4">
                <div class="alert alert-success text-center">
                    <i class="fas fa-check-circle"></i> مكتمل: ${completedCount}
                </div>
            </div>
            <div class="col-md-4">
                <div class="alert alert-warning text-center">
                    <i class="fas fa-spinner"></i> قيد التقدم: ${inProgressCount}
                </div>
            </div>
            <div class="col-md-4">
                <div class="alert alert-secondary text-center">
                    <i class="fas fa-clock"></i> لم يبدأ: ${notStartedCount}
                </div>
            </div>
        </div>
        <table class="table table-hover">
            <thead>
                <tr>
                    <th>#</th>
                    <th><i class="fas fa-user"></i> اسم المستخدم</th>
                    <th><i class="fas fa-envelope"></i> البريد الإلكتروني</th>
                    <th><i class="fas fa-book"></i> الكورس</th>
                    <th><i class="fas fa-calendar"></i> تاريخ التسجيل</th>
                    <th><i class="fas fa-chart-line"></i> نسبة الإنجاز</th>
                    <th><i class="fas fa-check-circle"></i> الحالة</th>
                    <th><i class="fas fa-cogs"></i> إجراءات</th>
                </tr>
            </thead>
            <tbody>
                ${filtered.map(enrollment => {
                    let statusBadge = '';
                    if (enrollment.progress === 100) {
                        statusBadge = '<span class="badge bg-success">✓ مكتمل</span>';
                    } else if (enrollment.progress > 0) {
                        statusBadge = '<span class="badge bg-warning">⟳ قيد التقدم</span>';
                    } else {
                        statusBadge = '<span class="badge bg-secondary">○ لم يبدأ</span>';
                    }
                    
                    return `
                        <tr>
                            <td>${enrollment.id}</td>
                            <td><strong>${enrollment.userName}</strong></td>
                            <td>${enrollment.userEmail}</td>
                            <td><span class="course-badge"><i class="fas fa-graduation-cap me-1"></i> ${enrollment.title}</span></td>
                            <td>${enrollment.enrolledDate}</td>
                            <td>
                                <div class="d-flex align-items-center">
                                    <span class="me-2" style="min-width: 45px;">${enrollment.progress}%</span>
                                    <div class="progress flex-grow-1" style="height: 8px;">
                                        <div class="progress-bar" style="width: ${enrollment.progress}%"></div>
                                    </div>
                                </div>
                             </td>
                            <td>${statusBadge}</td>
                            <td>
                                <button class="edit-btn" onclick="viewEnrollmentDetails(${enrollment.id})" title="عرض التفاصيل"><i class="fas fa-eye"></i></button>
                                <button class="delete-btn" onclick="deleteEnrollment(${enrollment.id})" title="حذف التسجيل"><i class="fas fa-trash"></i></button>
                             </td>
                        </tr>
                    `;
                }).join('')}
                ${filtered.length === 0 ? '<tr><td colspan="8" class="text-center text-muted">لا توجد تسجيلات في الكورسات</td>' : ''}
            </tbody>
        </table>
    `;
    document.getElementById('tableContent').innerHTML = html;
}

// عرض تفاصيل التسجيل
window.viewEnrollmentDetails = function(id) {
    const enrollment = currentData.enrollments.find(e => e.id === id);
    if (!enrollment) return;
    
    const modalContent = `
        <div class="modal fade" id="enrollmentDetailModal" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header" style="background: #fb873f; color: white;">
                        <h5 class="modal-title"><i class="fas fa-graduation-cap"></i> تفاصيل التسجيل</h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-12 mb-3">
                                <label class="fw-bold text-muted small">اسم المستخدم</label>
                                <p class="border-bottom pb-2">${enrollment.userName}</p>
                            </div>
                            <div class="col-12 mb-3">
                                <label class="fw-bold text-muted small">البريد الإلكتروني</label>
                                <p class="border-bottom pb-2">${enrollment.userEmail}</p>
                            </div>
                            <div class="col-12 mb-3">
                                <label class="fw-bold text-muted small">الكورس المسجل فيه</label>
                                <p class="border-bottom pb-2">${enrollment.title}</p>
                            </div>
                            <div class="col-12 mb-3">
                                <label class="fw-bold text-muted small">تاريخ التسجيل</label>
                                <p class="border-bottom pb-2">${enrollment.enrolledDate}</p>
                            </div>
                            <div class="col-12 mb-3">
                                <label class="fw-bold text-muted small">نسبة الإنجاز</label>
                                <div class="d-flex align-items-center mt-2">
                                    <div class="progress flex-grow-1" style="height: 10px;">
                                        <div class="progress-bar" style="width: ${enrollment.progress}%"></div>
                                    </div>
                                    <span class="ms-3 fw-bold">${enrollment.progress}%</span>
                                </div>
                            </div>
                            <div class="col-12 mb-3">
                                <label class="fw-bold text-muted small">الحالة</label>
                                <p class="mt-1">
                                    ${enrollment.progress === 100 ? '<span class="badge bg-success p-2">✓ مكتمل</span>' : 
                                      enrollment.progress > 0 ? '<span class="badge bg-warning p-2">⟳ قيد التقدم</span>' : 
                                      '<span class="badge bg-secondary p-2">○ لم يبدأ</span>'}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">إغلاق</button>
                        <button type="button" class="btn btn-orange" onclick="updateProgress(${enrollment.id})">تحديث نسبة الإنجاز</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    const oldModal = document.getElementById('enrollmentDetailModal');
    if (oldModal) oldModal.remove();
    
    document.body.insertAdjacentHTML('beforeend', modalContent);
    const modal = new bootstrap.Modal(document.getElementById('enrollmentDetailModal'));
    modal.show();
    
    document.getElementById('enrollmentDetailModal').addEventListener('hidden.bs.modal', function() {
        this.remove();
    });
};

// تحديث نسبة الإنجاز
window.updateProgress = function(id) {
    const newProgress = prompt('أدخل نسبة الإنجاز الجديدة (0-100):', '50');
    if (newProgress !== null && !isNaN(newProgress) && newProgress >= 0 && newProgress <= 100) {
        const index = currentData.enrollments.findIndex(e => e.id === id);
        if (index !== -1) {
            currentData.enrollments[index].progress = parseInt(newProgress);
            currentData.enrollments[index].status = parseInt(newProgress) === 100 ? 'مكتمل' : 'قيد التقدم';
            saveToStorage('enrollments', currentData.enrollments);
            showToast('تم تحديث نسبة الإنجاز بنجاح', 'success');
            renderContent();
            
            // إغلاق المودال
            const modal = bootstrap.Modal.getInstance(document.getElementById('enrollmentDetailModal'));
            if (modal) modal.hide();
        }
    } else {
        showToast('الرجاء إدخال نسبة صحيحة بين 0 و 100', 'error');
    }
};

// حذف تسجيل
window.deleteEnrollment = function(id) {
    if (confirm('هل أنت متأكد من حذف هذا التسجيل؟')) {
        currentData.enrollments = currentData.enrollments.filter(e => e.id !== id);
        saveToStorage('enrollments', currentData.enrollments);
        updateStats();
        renderContent();
        showToast('تم حذف التسجيل بنجاح', 'success');
    }
};

// باقي الدوال (renderContent, deleteItem, editItem, etc.) كما هي موجودة مسبقاً
function renderContent() {
    document.getElementById('addBtn').style.display = currentTab === 'dashboard' || currentTab === 'enrollments' ? 'none' : 'block';
    
    switch(currentTab) {
        case 'dashboard':
            renderDashboard();
            break;
        case 'users':
            renderUsersTable();
            break;
        case 'teachers':
            renderTeachersTable();
            break;
        case 'messages':
            renderMessagesTable();
            break;
        case 'enrollments':
            renderEnrollmentsTable();
            break;
    }
}

window.deleteItem = function(type, id) {
    if (confirm('هل أنت متأكد من حذف هذا العنصر؟')) {
        currentData[type] = currentData[type].filter(item => item.id !== id);
        saveToStorage(type, currentData[type]);
        updateStats();
        renderContent();
        showToast('تم الحذف بنجاح', 'success');
    }
};

// ... باقي الدوال (editItem, saveBtn, addBtn, showToast, search, logout, home) كما هي موجودة مسبقاً ...

// تحديث دوال التهيئة والإضافة
function showToast(message, type) {
    const toast = document.createElement('div');
    toast.className = `position-fixed bottom-0 end-0 m-3 alert alert-${type === 'success' ? 'success' : 'danger'} shadow`;
    toast.style.zIndex = '9999';
    toast.innerHTML = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
}

document.getElementById('searchInput').addEventListener('input', function(e) {
    searchTerm = e.target.value;
    renderContent();
});

document.querySelectorAll('.sidebar .nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelectorAll('.sidebar .nav-link').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
        currentTab = this.getAttribute('data-tab');
        document.getElementById('pageTitle').innerHTML = this.innerHTML;
        searchTerm = '';
        document.getElementById('searchInput').value = '';
        renderContent();
    });
});

document.getElementById('logoutBtn').addEventListener('click', function() {
    localStorage.removeItem('currentUser');
    window.location.href = 'login.html';
});

document.getElementById('homeBtn').addEventListener('click', function() {
    window.location.href = 'index.html';
});

// تحديث دالة التسجيل في الكورس في course-details.html لتسجيل البيانات
window.updateTeacherStatus = function(id, newStatus) {
    const index = currentData.teachers.findIndex(t => t.id === id);
    if (index !== -1) {
        currentData.teachers[index].status = newStatus;
        saveToStorage('teachers', currentData.teachers);
        showToast(`تم تحديث حالة المعلم إلى ${newStatus}`, 'success');
        renderContent();
    }
};

window.viewTeacherDetails = function(id) {
    const teacher = currentData.teachers.find(t => t.id === id);
    if (!teacher) return;
    
    const modalContent = `
        <div class="modal fade" id="teacherDetailModal" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header" style="background: #fb873f; color: white;">
                        <h5 class="modal-title"><i class="fas fa-chalkboard-user"></i> تفاصيل طلب المعلم</h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-12 mb-3">
                                <label class="fw-bold text-muted small">الاسم الكامل</label>
                                <p class="border-bottom pb-2">${teacher.name}</p>
                            </div>
                            <div class="col-12 mb-3">
                                <label class="fw-bold text-muted small">البريد الإلكتروني</label>
                                <p class="border-bottom pb-2">${teacher.email}</p>
                            </div>
                            <div class="col-12 mb-3">
                                <label class="fw-bold text-muted small">رقم الهاتف</label>
                                <p class="border-bottom pb-2">${teacher.phone || 'غير مدخل'}</p>
                            </div>
                            <div class="col-12 mb-3">
                                <label class="fw-bold text-muted small">التخصص المطلوب تدريسه</label>
                                <p class="border-bottom pb-2">${teacher.specialty || 'غير محدد'}</p>
                            </div>
                            <div class="col-12 mb-3">
                                <label class="fw-bold text-muted small">المؤهل العلمي</label>
                                <p class="border-bottom pb-2">${teacher.qualification || 'غير مدخل'}</p>
                            </div>
                            <div class="col-12 mb-3">
                                <label class="fw-bold text-muted small">الخبرات السابقة</label>
                                <p class="border-bottom pb-2">${teacher.experience || 'غير مدخل'}</p>
                            </div>
                            <div class="col-12 mb-3">
                                <label class="fw-bold text-muted small">رسالة إضافية</label>
                                <p class="border-bottom pb-2">${teacher.message || 'لا توجد رسالة إضافية'}</p>
                            </div>
                            <div class="col-12 mb-3">
                                <label class="fw-bold text-muted small">تاريخ التقديم</label>
                                <p class="border-bottom pb-2">${teacher.appliedDate || 'غير محدد'}</p>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">إغلاق</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    const oldModal = document.getElementById('teacherDetailModal');
    if (oldModal) oldModal.remove();
    
    document.body.insertAdjacentHTML('beforeend', modalContent);
    const modal = new bootstrap.Modal(document.getElementById('teacherDetailModal'));
    modal.show();
    
    document.getElementById('teacherDetailModal').addEventListener('hidden.bs.modal', function() {
        this.remove();
    });
};

// دوال editItem, saveBtn, addBtn (كما هي موجودة مسبقاً)
window.editItem = function(type, id) {
    const item = currentData[type].find(i => i.id === id);
    if (!item) return;
    
    editId = id;
    document.getElementById('itemId').value = id;
    document.getElementById('itemName').value = item.name;
    document.getElementById('itemEmail').value = item.email;
    
    let extraHtml = '';
    if (type === 'users') {
        document.getElementById('modalTitle').innerHTML = 'تعديل مستخدم';
        extraHtml = `<div class="mb-3"><label class="form-label">تاريخ التسجيل</label><input type="date" class="form-control" id="extra1" value="${item.registered || ''}"></div>`;
    } else if (type === 'teachers') {
        document.getElementById('modalTitle').innerHTML = 'تعديل بيانات المعلم';
        extraHtml = `
            <div class="mb-3"><label class="form-label">رقم الهاتف</label><input type="tel" class="form-control" id="extraPhone" value="${item.phone || ''}"></div>
            <div class="mb-3"><label class="form-label">التخصص</label><input type="text" class="form-control" id="extraSpecialty" value="${item.specialty || ''}"></div>
            <div class="mb-3"><label class="form-label">المؤهل العلمي</label><input type="text" class="form-control" id="extraQualification" value="${item.qualification || ''}"></div>
            <div class="mb-3"><label class="form-label">الخبرات السابقة</label><textarea class="form-control" rows="2" id="extraExperience">${item.experience || ''}</textarea></div>
            <div class="mb-3"><label class="form-label">الحالة</label><select class="form-control" id="extraStatus"><option ${item.status === 'قيد المراجعة' ? 'selected' : ''}>قيد المراجعة</option><option ${item.status === 'موافق' ? 'selected' : ''}>موافق</option><option ${item.status === 'مرفوض' ? 'selected' : ''}>مرفوض</option></select></div>
        `;
    } else if (type === 'messages') {
        document.getElementById('modalTitle').innerHTML = 'عرض الرسالة';
        extraHtml = `
            <div class="mb-3"><label class="form-label">الموضوع</label><input type="text" class="form-control" id="extra1" value="${item.subject || ''}"></div>
            <div class="mb-3"><label class="form-label">الرسالة</label><textarea class="form-control" rows="4" id="extra2">${item.message || ''}</textarea></div>
            <div class="mb-3"><label class="form-label">التاريخ</label><input type="date" class="form-control" id="extra3" value="${item.date || ''}"></div>
        `;
    }
    
    document.getElementById('extraFields').innerHTML = extraHtml;
    window.currentEditType = type;
    
    new bootstrap.Modal(document.getElementById('addModal')).show();
};

document.getElementById('saveBtn').onclick = function() {
    const type = window.currentEditType || currentTab;
    const id = parseInt(document.getElementById('itemId').value);
    const name = document.getElementById('itemName').value;
    const email = document.getElementById('itemEmail').value;
    
    if (!name || !email) {
        showToast('الرجاء ملء جميع الحقول', 'error');
        return;
    }
    
    if (id) {
        const index = currentData[type].findIndex(i => i.id === id);
        if (index !== -1) {
            currentData[type][index].name = name;
            currentData[type][index].email = email;
            
            if (type === 'users') {
                currentData[type][index].registered = document.getElementById('extra1')?.value || new Date().toISOString().split('T')[0];
            } else if (type === 'teachers') {
                currentData[type][index].phone = document.getElementById('extraPhone')?.value;
                currentData[type][index].specialty = document.getElementById('extraSpecialty')?.value;
                currentData[type][index].qualification = document.getElementById('extraQualification')?.value;
                currentData[type][index].experience = document.getElementById('extraExperience')?.value;
                currentData[type][index].status = document.getElementById('extraStatus')?.value;
            } else if (type === 'messages') {
                currentData[type][index].subject = document.getElementById('extra1')?.value;
                currentData[type][index].message = document.getElementById('extra2')?.value;
                currentData[type][index].date = document.getElementById('extra3')?.value;
            }
        }
        showToast('تم التحديث بنجاح', 'success');
    } else {
        const newId = Math.max(...currentData[type].map(i => i.id), 0) + 1;
        const newItem = { id: newId, name, email };
        
        if (type === 'users') {
            newItem.registered = new Date().toISOString().split('T')[0];
            newItem.role = 'طالب';
            newItem.password = '123456';
            newItem.status = 'نشط';
        } else if (type === 'teachers') {
            newItem.specialty = document.getElementById('extraSpecialty')?.value || 'غير محدد';
            newItem.phone = document.getElementById('extraPhone')?.value || '';
            newItem.qualification = document.getElementById('extraQualification')?.value || '';
            newItem.experience = document.getElementById('extraExperience')?.value || '';
            newItem.appliedDate = new Date().toISOString().split('T')[0];
            newItem.status = 'قيد المراجعة';
        } else if (type === 'messages') {
            newItem.subject = document.getElementById('extra1')?.value || 'رسالة جديدة';
            newItem.message = document.getElementById('extra2')?.value || '';
            newItem.date = new Date().toISOString().split('T')[0];
            newItem.status = 'غير مقروءة';
        }
        
        currentData[type].push(newItem);
        showToast('تمت الإضافة بنجاح', 'success');
    }
    
    saveToStorage(type, currentData[type]);
    updateStats();
    renderContent();
    
    bootstrap.Modal.getInstance(document.getElementById('addModal')).hide();
    document.getElementById('addForm').reset();
    document.getElementById('itemId').value = '';
};

document.getElementById('addBtn').onclick = function() {
    editId = null;
    document.getElementById('itemId').value = '';
    document.getElementById('itemName').value = '';
    document.getElementById('itemEmail').value = '';
    document.getElementById('modalTitle').innerHTML = `إضافة ${currentTab === 'users' ? 'مستخدم' : 'مدرس'} جديد`;
    
    let extraHtml = '';
    if (currentTab === 'users') {
        extraHtml = `<div class="mb-3"><label class="form-label">تاريخ التسجيل</label><input type="date" class="form-control" id="extra1" value="${new Date().toISOString().split('T')[0]}"></div>`;
    } else if (currentTab === 'teachers') {
        extraHtml = `
            <div class="mb-3"><label class="form-label">رقم الهاتف</label><input type="tel" class="form-control" id="extraPhone" placeholder="رقم الهاتف"></div>
            <div class="mb-3"><label class="form-label">التخصص</label><input type="text" class="form-control" id="extraSpecialty" placeholder="مثال: تطوير الويب"></div>
            <div class="mb-3"><label class="form-label">المؤهل العلمي</label><input type="text" class="form-control" id="extraQualification" placeholder="مثال: بكالوريوس"></div>
            <div class="mb-3"><label class="form-label">الخبرات السابقة</label><textarea class="form-control" rows="2" id="extraExperience" placeholder="مثال: 5 سنوات في مجال البرمجة"></textarea></div>
        `;
    }
    
    document.getElementById('extraFields').innerHTML = extraHtml;
    window.currentEditType = currentTab;
};

// بدء التطبيق
updateStats();
renderContent();